import { google } from "googleapis";

let sheetConnectionSettings: any;

async function getSheetAccessToken() {
  if (
    sheetConnectionSettings &&
    sheetConnectionSettings.settings.expires_at &&
    new Date(sheetConnectionSettings.settings.expires_at).getTime() > Date.now()
  ) {
    return sheetConnectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error("X-Replit-Token not found for repl/depl");
  }

  sheetConnectionSettings = await fetch(
    "https://" +
      hostname +
      "/api/v2/connection?include_secrets=true&connector_names=google-sheet",
    {
      headers: {
        Accept: "application/json",
        "X-Replit-Token": xReplitToken,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  const accessToken =
    sheetConnectionSettings?.settings?.access_token ||
    sheetConnectionSettings.settings?.oauth?.credentials?.access_token;

  if (!sheetConnectionSettings || !accessToken) {
    throw new Error("Google Sheet not connected");
  }
  return accessToken;
}

function getOAuth2Client(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return oauth2Client;
}

export async function getUncachableGoogleSheetClient() {
  const accessToken = await getSheetAccessToken();
  const oauth2Client = getOAuth2Client(accessToken);
  return google.sheets({ version: "v4", auth: oauth2Client });
}

export async function getUncachableGoogleDriveClient() {
  const accessToken = await getSheetAccessToken();
  const oauth2Client = getOAuth2Client(accessToken);
  return google.drive({ version: "v3", auth: oauth2Client });
}

let cachedSpreadsheetId: string | null = null;

const SPREADSHEET_NAME = "Pendaftaran Widya Nusantara Academy";
const HEADERS = [
  "Timestamp",
  "Nama Lengkap",
  "Asal Sekolah",
  "Tanggal Lahir",
  "Status Pendidikan",
  "Nomor WhatsApp",
  "Username Instagram",
  "Gmail",
  "Bukti Pembayaran",
];

export async function getOrCreateSpreadsheet(): Promise<string> {
  if (cachedSpreadsheetId) return cachedSpreadsheetId;

  const sheets = await getUncachableGoogleSheetClient();
  const drive = await getUncachableGoogleDriveClient();

  const listRes = await drive.files.list({
    q: `name='${SPREADSHEET_NAME}' and mimeType='application/vnd.google-apps.spreadsheet' and trashed=false`,
    fields: "files(id, name)",
    spaces: "drive",
  });

  if (listRes.data.files && listRes.data.files.length > 0) {
    cachedSpreadsheetId = listRes.data.files[0].id!;
    return cachedSpreadsheetId;
  }

  const createRes = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: SPREADSHEET_NAME },
      sheets: [
        {
          properties: { title: "Data Pendaftar" },
        },
      ],
    },
  });

  cachedSpreadsheetId = createRes.data.spreadsheetId!;

  await sheets.spreadsheets.values.update({
    spreadsheetId: cachedSpreadsheetId,
    range: "Data Pendaftar!A1:I1",
    valueInputOption: "RAW",
    requestBody: {
      values: [HEADERS],
    },
  });

  return cachedSpreadsheetId;
}

export async function appendRegistration(data: {
  namaLengkap: string;
  asalSekolah: string;
  tanggalLahir: string;
  statusPendidikan: string;
  nomorWhatsApp: string;
  usernameInstagram: string;
  gmail: string;
  buktiPembayaranUrl: string;
}) {
  const sheets = await getUncachableGoogleSheetClient();
  const spreadsheetId = await getOrCreateSpreadsheet();

  const timestamp = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
  });

  const row = [
    timestamp,
    data.namaLengkap,
    data.asalSekolah,
    data.tanggalLahir,
    data.statusPendidikan,
    data.nomorWhatsApp,
    `@${data.usernameInstagram}`,
    data.gmail,
    data.buktiPembayaranUrl || "Belum diunggah",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Data Pendaftar!A:I",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}

export async function uploadFileToDrive(
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string,
): Promise<string> {
  const drive = await getUncachableGoogleDriveClient();
  const { Readable } = await import("stream");

  const fileRes = await drive.files.create({
    requestBody: {
      name: fileName,
      mimeType,
    },
    media: {
      mimeType,
      body: Readable.from(fileBuffer),
    },
    fields: "id, webViewLink",
  });

  await drive.permissions.create({
    fileId: fileRes.data.id!,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  return `https://drive.google.com/file/d/${fileRes.data.id}/view`;
}
