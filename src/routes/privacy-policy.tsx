import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Damian Vanco" },
      { name: "description", content: "Privacy policy and terms of use for damianvanco.com." },
      { property: "og:title", content: "Privacy Policy — Damian Vanco" },
      { property: "og:description", content: "Privacy policy and terms of use for damianvanco.com." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-28 pb-24 md:px-6 md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1
            className="font-medium leading-[1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Privacy Policy
          </h1>

          <div className="mt-12 space-y-8 text-[14px] leading-relaxed text-foreground/80">
            <div>
              <p className="text-foreground">Responsible Entity</p>
              <p className="mt-3">
                The responsible entity (Controller) for the data processing regulated in this
                Privacy Policy is Damian Vanco (hereinafter "I", "me" or "Damian Vanco").
              </p>
              <p className="mt-3">My contact details are:</p>
              <p className="mt-3">
                <a href="mailto:hello@damianvanco.com" className="underline">
                  hello@damianvanco.com
                </a>
              </p>
              <p className="mt-3 text-foreground/60">Last updated: May 2026</p>
            </div>

            <p>
              Welcome to my portfolio website ("the website"). By accessing or using this website,
              you agree to be bound by these terms of use. If you do not agree to these terms, you
              may not use the website. This website does not track visitors, does not use analytics,
              and does not set marketing or tracking cookies.
            </p>

            <div>
              <p className="text-foreground">1. Use of this website</p>
              <p className="mt-3">
                This website showcases my work as an independent designer and developer, including
                visual identity, web design and web development projects. The content is provided
                for informational and portfolio purposes only and does not constitute a binding
                offer of services. For inquiries about a collaboration, please contact me directly.
              </p>
            </div>

            <div>
              <p className="text-foreground">2. Intellectual property</p>
              <p className="mt-3">
                All content on this website, including text, graphics, logos, images, videos and
                code, is the property of Damian Vanco or the respective clients and collaborators
                and is protected by copyright and other intellectual property laws. Project work is
                published with the permission of the relevant client. You may not reproduce,
                modify, distribute, or display any content from this website without prior written
                permission.
              </p>
            </div>

            <div>
              <p className="text-foreground">3. No tracking, no analytics</p>
              <p className="mt-3">
                This website does not collect personal data from visitors. No analytics scripts, no
                tracking pixels, and no advertising cookies are used. The only personal data I
                process is information you voluntarily send me by email when reaching out about a
                project. That information is used solely to respond to your inquiry and is not
                shared with third parties.
              </p>
            </div>

            <div>
              <p className="text-foreground">4. Disclaimer of warranties</p>
              <p className="mt-3">
                This website is provided on an "as is" and "as available" basis without warranties
                of any kind, either express or implied. I do not warrant that the website will be
                uninterrupted or error-free, that defects will be corrected, or that the website or
                the servers that make it available are free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <p className="text-foreground">5. Limitation of liability</p>
              <p className="mt-3">
                In no event shall I be liable for any direct, indirect, incidental, special, or
                consequential damages arising out of or in connection with the use of this website
                or the information provided on it. This includes, without limitation, damages for
                loss of profits, data, or other intangible losses.
              </p>
            </div>

            <div>
              <p className="text-foreground">6. External links</p>
              <p className="mt-3">
                This website contains links to live client websites and third-party platforms. I am
                not responsible for the content, privacy practices, or availability of any external
                site linked from here.
              </p>
            </div>

            <div>
              <p className="text-foreground">7. Governing law</p>
              <p className="mt-3">
                These terms of use shall be governed by and construed in accordance with the laws
                of the Slovak Republic, without giving effect to any principles of conflicts of
                law.
              </p>
            </div>

            <div>
              <p className="text-foreground">8. Changes to this policy</p>
              <p className="mt-3">
                I may update this policy from time to time. Any changes will be posted on this
                page. I recommend reviewing it periodically to stay informed.
              </p>
            </div>

            <p>By using this website, you agree to be bound by these terms of use.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
