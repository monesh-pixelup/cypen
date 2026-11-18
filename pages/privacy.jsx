import Head from 'next/head';
import { LegalShell } from '../components/legal-shell';

const M = () => <a className="inline" href="mailto:info@cypen.ai">info@cypen.ai</a>;

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Cypen</title>
        <meta name="description" content="How cypen.ai collects, uses, stores and protects the personal information you share with us." />
      </Head>
      <LegalShell
        eyebrow="Legal"
        title="Privacy Policy"
        effective="12 November 2026"
        intro="This policy explains how cypen.ai collects, uses, stores and protects the personal information you share with us when you visit our website, request pricing, sign an engagement, or otherwise get in touch."
      >
        <section>
          <h2>1. Who we are</h2>
          <p>cypen.ai is an AI-accelerated offensive security service offered by Agentic Security Pty Ltd (ABN 42 701 054 506). The personal information controller for this website is Agentic Security Pty Ltd, with an Australian principal place of business. For privacy questions, email <M />.</p>
        </section>
        <section>
          <h2>2. What we collect</h2>
          <p>We collect only the information needed to respond to you, provide pricing, or deliver services:</p>
          <ul>
            <li><strong>Contact details</strong> — name, work email address, optional phone number, and any details you provide in a message or scoping form.</li>
            <li><strong>Quote and engagement data</strong> — engagement type, scope answers, pricing selections, signed quote records, and any purchase order or billing references you provide.</li>
            <li><strong>Technical data</strong> — IP address, browser type, device information, and pages visited. This is collected automatically through server logs and analytics.</li>
            <li><strong>Communications</strong> — emails, support requests, and any other correspondence.</li>
          </ul>
        </section>
        <section>
          <h2>3. How we use your information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to enquiries and provide pricing or scoping information.</li>
            <li>Prepare, sign, and manage engagement quotes and statements of work.</li>
            <li>Deliver penetration testing and security services.</li>
            <li>Process billing and maintain business records.</li>
            <li>Improve the website, security, and user experience.</li>
            <li>Comply with legal and professional obligations.</li>
          </ul>
        </section>
        <section>
          <h2>4. Legal basis for processing</h2>
          <p>We process personal information on the basis of our legitimate business interests, the performance of a contract, compliance with legal obligations, or your consent, depending on the context. Where consent is required, you can withdraw it at any time by contacting us.</p>
        </section>
        <section>
          <h2>5. How we share information</h2>
          <p>We do not sell your personal information. We share it only with service providers who help us operate the business (for example, cloud hosting, database, analytics, payment, and electronic signature services), and only under confidentiality and security obligations.</p>
          <p>We use Cloudflare Turnstile to protect our forms from automated spam. Cloudflare processes technical browser and network information for this verification. See <a className="inline" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Cloudflare&apos;s privacy policy</a>.</p>
          <p>We use PostHog for website analytics, error monitoring, and session replay. PostHog processes pseudonymous visitor and session identifiers, page and interaction data, device information, and diagnostic data. Form input values are masked in session replays and are not included in our custom analytics events. See <a className="inline" href="https://posthog.com/privacy" target="_blank" rel="noopener">PostHog&apos;s privacy notice</a>.</p>
          <p>We may disclose information if required by law, regulation, legal process, or to protect our rights, property, or safety.</p>
        </section>
        <section>
          <h2>6. Security</h2>
          <p>We apply appropriate technical and organisational security measures to protect the information we hold, including access controls, encryption in transit, and secure hosting environments. We also apply the same security discipline to our own infrastructure that we apply to client testing.</p>
        </section>
        <section>
          <h2>7. Data retention</h2>
          <p>We keep your information for as long as needed for the purposes described in this policy, or as required by law, professional standards, or contract. When no longer needed, we delete or anonymise it securely.</p>
        </section>
        <section>
          <h2>8. Cookies and tracking</h2>
          <p>Our website uses cookies and browser storage to assign a pseudonymous visitor identifier, understand page views and interactions, diagnose errors, and associate activity with a browser session. Session replay may record how a visitor navigates the site; text entered into form fields is masked. We do not identify visitors in PostHog using their name or email address. You can control cookies and stored site data through your browser settings.</p>
        </section>
        <section>
          <h2>9. Your rights</h2>
          <p>Depending on your location, you may have rights to access, correct, delete, restrict, or export your personal information, or to object to certain processing. To exercise these rights, contact us at <M />. We will respond within a reasonable timeframe and may need to verify your identity before acting.</p>
        </section>
        <section>
          <h2>10. Third-party links</h2>
          <p>This website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. We encourage you to read their privacy policies before submitting information.</p>
        </section>
        <section>
          <h2>11. Changes to this policy</h2>
          <p>We may update this policy from time to time. The effective date at the top of this page will be revised accordingly. We encourage you to review the policy periodically.</p>
        </section>
        <section>
          <h2>12. Contact us</h2>
          <p>If you have questions about this privacy policy or how we handle your information, please contact us at <M />.</p>
        </section>
      </LegalShell>
    </>
  );
}
