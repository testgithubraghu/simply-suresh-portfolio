/** Hand-drawn brand & channel glyphs (inline SVG, no icon-font). */

export function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.83 9.83 0 0 0 4.68 1.2h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.09.81.82-3.01-.19-.31a8.15 8.15 0 0 1-1.25-4.35c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.51-3.69 8.17-8.21 8.17Zm4.5-6.12c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

export function YouTubeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

export function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  );
}

export function EnvelopeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="5" width="19" height="14" rx="3" />
      <path d="m3.5 7 7.4 5.6a2 2 0 0 0 2.2 0L20.5 7" />
    </svg>
  );
}

export function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7.2 3.5H5.1A2.6 2.6 0 0 0 2.5 6.3c.4 8.3 6.9 14.8 15.2 15.2a2.6 2.6 0 0 0 2.8-2.6v-2.1a1.8 1.8 0 0 0-1.3-1.7l-2.9-.9a1.8 1.8 0 0 0-1.9.6l-.9 1.1a12.6 12.6 0 0 1-5.4-5.4l1.1-.9a1.8 1.8 0 0 0 .6-1.9l-.9-2.9a1.8 1.8 0 0 0-1.8-1.3Z" />
    </svg>
  );
}

/** Programme category glyphs, drawn for this brand */
export function CardsGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="7" width="12" height="18" rx="2.5" transform="rotate(-8 10 16)" />
      <rect x="14" y="6" width="12" height="18" rx="2.5" transform="rotate(7 20 15)" />
      <path d="M19.4 12.2c1.2-1.5 3-1.5 4.2 0-1.2 1.6-3 1.6-4.2 0Zm1 3.1v3.4m0 0-1.4 1.6m1.4-1.6 1.4 1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BalloonGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 3c4.6 0 8 3.7 8 8.4 0 5.2-3.7 9.4-6.6 10.9l1 2.2h-4.8l1-2.2C11.7 20.8 8 16.6 8 11.4 8 6.7 11.4 3 16 3Z" />
      <path d="M14.5 24.5c-1.6 1.4-1.8 3.2-.4 4.5M17.5 24.5c1.6 1.4 1.8 3.2.4 4.5" strokeLinecap="round" />
    </svg>
  );
}

export function CurtainGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h24M6 5v22M26 5v22" strokeLinecap="round" />
      <path d="M6 5c4 6 4 16 0 22M26 5c-4 6-4 16 0 22M16 5c2.5 5 2.5 12 0 17" strokeLinecap="round" />
      <path d="M13.5 25.5 16 22l2.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
