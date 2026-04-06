export function BatikDivider({ color = "#b8860b" }: { color?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6"/>
      </svg>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="3" fill={color} opacity="0.5"/>
        <path d="M8 1 L8 15 M1 8 L15 8" stroke={color} strokeWidth="0.8" opacity="0.4"/>
      </svg>
      <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6 Q10 12 20 6 Q30 0 40 6 Q50 12 60 6" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6"/>
      </svg>
    </div>
  );
}

export function BatikCornerDecor({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5 L20 5 L5 20 Z" fill="#b8860b" opacity="0.2"/>
      <path d="M5 5 L25 5 L5 25 Z" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.3"/>
      <circle cx="8" cy="8" r="3" fill="none" stroke="#b8860b" strokeWidth="1" opacity="0.4"/>
      <path d="M15 5 Q20 10 25 5" stroke="#b8860b" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M5 15 Q10 20 5 25" stroke="#b8860b" strokeWidth="0.8" fill="none" opacity="0.4"/>
    </svg>
  );
}

export function BatikFlower({ size = 40, color = "#b8860b", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="4" fill={color} opacity="0.6"/>
      <ellipse cx="20" cy="11" rx="3" ry="7" fill={color} opacity="0.3"/>
      <ellipse cx="20" cy="29" rx="3" ry="7" fill={color} opacity="0.3"/>
      <ellipse cx="11" cy="20" rx="7" ry="3" fill={color} opacity="0.3"/>
      <ellipse cx="29" cy="20" rx="7" ry="3" fill={color} opacity="0.3"/>
      <ellipse cx="14" cy="14" rx="3" ry="6" fill={color} opacity="0.2" transform="rotate(45 14 14)"/>
      <ellipse cx="26" cy="14" rx="3" ry="6" fill={color} opacity="0.2" transform="rotate(-45 26 14)"/>
      <ellipse cx="14" cy="26" rx="3" ry="6" fill={color} opacity="0.2" transform="rotate(-45 14 26)"/>
      <ellipse cx="26" cy="26" rx="3" ry="6" fill={color} opacity="0.2" transform="rotate(45 26 26)"/>
    </svg>
  );
}

export function BatikWave({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 40 C180 80 360 0 540 40 C720 80 900 0 1080 40 C1260 80 1440 0 1440 40 L1440 80 L0 80 Z" fill="currentColor"/>
        <path d="M0 30 C240 70 480 -10 720 30 C960 70 1200 -10 1440 30" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
    </div>
  );
}
