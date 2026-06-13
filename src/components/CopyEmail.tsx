import { useState } from "react";

const EMAIL = "krisreed2001@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions / non-secure context) — the
      // mailto link next to this button still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-block cursor-pointer border border-line px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "Copied ✓" : "Copy address"}
    </button>
  );
}
