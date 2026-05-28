import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Damian Vanco" },
      { name: "description", content: "Privacy policy and terms of use for Damian Vanco's portfolio website." },
      { property: "og:title", content: "Privacy Policy — Damian Vanco" },
      { property: "og:description", content: "Privacy policy and terms of use for Damian Vanco's portfolio website." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex gap-4">
        <span className="text-[15px] text-foreground">{number}.</span>
        <h2 className="text-[15px] font-medium text-foreground">{title}</h2>
      </div>
      <div className="mt-4 text-[14px] leading-relaxed text-foreground/70">{children}</div>
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-20 pb-24 md:px-6 md:pt-24">
        {/* Title + divider */}
        <h1
          className="font-medium leading-[1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Privacy Policy
        </h1>
        <div className="mt-10 border-t border-dashed border-foreground/25" />

        {/* Two-column grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* LEFT — Responsible Entity */}
          <div>
            <h2 className="text-[18px] font-medium text-foreground">Responsible Entity</h2>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-foreground/70">
              The responsible entity (Controller) for the data processing regulated in this Privacy
              Policy is Damian Vanco (hereinafter "I", "me" or "Damian Vanco").
            </p>

            <p className="mt-10 text-[14px] text-foreground">Our contact details are:</p>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/70">
              Bratislava, Slovakia
            </p>
            <p className="mt-6 text-[14px] text-foreground/70">
              <a href="mailto:damian.vanco7@gmail.com" className="hover:text-foreground">
                damian.vanco7@gmail.com
              </a>
            </p>
          </div>

          {/* RIGHT — numbered sections */}
          <div className="space-y-10">
            <p className="text-[14px] text-foreground/60">Last updated: May 2026</p>

            <p className="text-[14px] leading-relaxed text-foreground/70">
              Welcome to Damian Vanco's portfolio website ("I", "me", or "my"). By accessing or
              using this website, you agree to be bound by these terms of use. If you do not agree
              to these terms, you may not use this website.
            </p>

            <Section number={1} title="Use of this website">
              This website showcases my work as an independent designer and developer, including
              visual identity, web design and web development projects. The content is provided for
              informational and portfolio purposes only and does not constitute a binding offer of
              services. For inquiries about a collaboration, please contact me directly by email.
            </Section>

            <Section number={2} title="Intellectual property">
              All content on this website, including text, graphics, logos, images, videos and
              code, is the property of Damian Vanco or the respective clients and collaborators and
              is protected by copyright and other intellectual property laws. Project work is
              published with the permission of the relevant client. You may not reproduce, modify,
              distribute, or display any content from this website without my prior written
              permission.
            </Section>

            <Section number={3} title="No tracking, no analytics">
              This website does not collect personal data from visitors. No analytics scripts, no
              tracking pixels, and no advertising or marketing cookies are used. The only personal
              data I process is information you voluntarily send me by email when reaching out
              about a project. That information is used solely to respond to your inquiry and is
              not shared with third parties.
            </Section>

            <Section number={4} title="Disclaimer of warranties">
              This website is provided on an "as is" and "as available" basis without warranties of
              any kind, either express or implied, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or non-infringement. I do not
              warrant that this website will be uninterrupted or error-free, that defects will be
              corrected, or that the website or the servers that make it available are free of
              viruses or other harmful components.
            </Section>

            <Section number={5} title="Limitation of liability">
              In no event shall I be liable for any direct, indirect, incidental, special, or
              consequential damages arising out of or in connection with the use of this website or
              the information provided on it. This includes, without limitation, damages for loss
              of profits, data, or other intangible losses.
            </Section>

            <Section number={6} title="External links">
              This website contains links to live client websites and third-party platforms. I am
              not responsible for the content, privacy practices, or availability of any external
              site linked from here.
            </Section>

            <Section number={7} title="Governing law">
              These terms of use shall be governed by and construed in accordance with the laws of
              the Slovak Republic, without giving effect to any principles of conflicts of law.
            </Section>

            <Section number={8} title="Changes to this policy">
              I may update this policy from time to time. Any changes will be posted on this page.
              I recommend reviewing it periodically to stay informed.
            </Section>

            <p className="text-[14px] leading-relaxed text-foreground/70">
              By using this website, you agree to be bound by these terms of use.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
