import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useT } from "@/lib/i18n";

const RECIPIENT = "damian.vanco7@gmail.com";

export function GetInTouchDialog({ children }: { children: ReactNode }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setSent(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setTimeout(reset, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-2xl gap-0 border-border/60 bg-white p-10 shadow-none sm:rounded-md md:p-14">
        {sent ? (
          <div className="flex flex-col items-start">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full text-white"
              style={{
                backgroundColor: "var(--accent-blue)",
                animation: "git-pop 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline
                  points="5 12 10 17 19 7"
                  style={{
                    strokeDasharray: 30,
                    strokeDashoffset: 30,
                    animation: "git-check 500ms ease-out 350ms forwards",
                  }}
                />
              </svg>
            </span>
            <h2
              className="mt-8 font-medium leading-[1.05] tracking-tight text-foreground"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                animation: "git-rise 500ms ease-out 250ms both",
              }}
            >
              Thank you
            </h2>
            <p
              className="mt-4 text-[15px] leading-relaxed text-foreground/60"
              style={{ animation: "git-rise 500ms ease-out 400ms both" }}
            >
              Your message is on its way. I'll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--accent-blue)",
                animation: "git-rise 500ms ease-out 550ms both",
              }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              Go back
            </button>
            <style>{`
              @keyframes git-pop {
                0% { transform: scale(0); opacity: 0; }
                60% { transform: scale(1.1); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
              }
              @keyframes git-check {
                to { stroke-dashoffset: 0; }
              }
              @keyframes git-rise {
                from { opacity: 0; transform: translateY(8px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        ) : (
          <>
            <h2
              className="font-medium leading-[1.05] tracking-tight text-foreground"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Get in touch
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/60">
              Leave your name and a short message — I'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-10">
              <Field
                id="git-name"
                label="Name"
                required
                maxLength={100}
                value={name}
                onChange={setName}
                placeholder="Your name"
              />
              <Field
                id="git-email"
                label="Email (optional)"
                type="email"
                maxLength={255}
                value={email}
                onChange={setEmail}
                placeholder="you@example.com"
              />
              <TextareaField
                id="git-message"
                label="Message"
                required
                maxLength={2000}
                value={message}
                onChange={setMessage}
                placeholder="Tell me about your project..."
              />

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent-blue)" }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  Send message
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border/60 pb-3">
      <label htmlFor={id} className="text-[13px] text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-[16px] text-foreground placeholder:text-foreground/30 focus:outline-none"
      />
    </div>
  );
}

function TextareaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  required,
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border/60 pb-3">
      <label htmlFor={id} className="text-[13px] text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        required={required}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none bg-transparent text-[16px] leading-relaxed text-foreground placeholder:text-foreground/30 focus:outline-none"
      />
    </div>
  );
}
