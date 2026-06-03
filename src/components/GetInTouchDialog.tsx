import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RECIPIENT = "damian.vanco7@gmail.com";

export function GetInTouchDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[22px] font-medium tracking-tight">
            Get in touch
          </DialogTitle>
          <DialogDescription className="text-[14px] text-muted-foreground">
            Leave your name and a short message, I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="git-name" className="text-[13px]">Name</Label>
            <Input
              id="git-name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="git-email" className="text-[13px]">Email (optional)</Label>
            <Input
              id="git-email"
              type="email"
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="git-message" className="text-[13px]">Message</Label>
            <Textarea
              id="git-message"
              required
              maxLength={2000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
            />
          </div>
          <Button
            type="submit"
            className="mt-2 self-start rounded-full px-5 text-white hover:opacity-90"
            style={{ backgroundColor: "var(--accent-blue)" }}
          >
            Send message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
