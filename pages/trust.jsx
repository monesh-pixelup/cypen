import Head from 'next/head';
import { LegalShell } from '../components/legal-shell';

const M = () => <a className="inline" href="mailto:info@cypen.ai">info@cypen.ai</a>;

export default function Trust() {
  return (
    <>
      <Head>
        <title>Trust Centre | Cypen</title>
        <meta name="description" content="Cypen's information security practices, authorised testing safeguards, and customer data protection, retention and deletion controls." />
      </Head>
      <LegalShell
        eyebrow="Trust"
        title="Trust Centre"
        effective="9 October 2026"
        intro="Information security is essential to Cypen's operations, and we protect all information entrusted to us by applying rigorous security controls throughout the delivery of our services."
      >
        <section>
          <p>Cypen's AI security agents probe authorised infrastructure using techniques an attacker would use, surface exploitable vulnerabilities with supporting evidence, and provide remediation guidance that supports your existing workflows. Our services combine agent-led testing with human oversight.</p>
          <p>This Trust Centre explains our security practices, testing safeguards, and data handling. We also support customer security reviews and questionnaires.</p>
        </section>
        <section>
          <h2>1. Security governance and certification</h2>
          <p>We maintain a defined risk management program to identify, assess, and address risks to our platform, service delivery, and customer information. We use security policies and controls to guide our work and review them as our services and risks evolve.</p>
          <p>Cypen is working towards ISO/IEC 27001 certification, with a target completion date in 2027. Certification is in progress and has not yet been achieved.</p>
          <p>We maintain cyber liability, professional indemnity, and public liability insurance. Certificates of currency are available on request.</p>
        </section>
        <section>
          <h2>2. Our testing services</h2>
          <p>The safeguards described on this page apply to both of our testing services:</p>
          <ul>
            <li><strong>Penetration Testing:</strong> Once-off security testing of approved assets within a booked testing window.</li>
            <li><strong>Adversarial Exposure Validation (AEV):</strong> Ongoing, continuous security testing of your approved external attack surface.</li>
          </ul>
          <p>Both services use approved targets, isolated testing environments, human oversight, and protected evidence storage.</p>
        </section>
        <section>
          <h2>3. Authorised scope and engagement rules</h2>
          <p>Testing scope and engagement rules are defined in the platform and form part of the agreed engagement. They identify the authorised assets, testing period or subscription term, permitted methods, exclusions, relevant contacts, and controls for stopping testing.</p>
          <ul>
            <li>Testing is limited to explicitly authorised, in-scope targets.</li>
            <li>Customers confirm that they hold sufficient authority and any required third-party permissions for each target.</li>
            <li>A human reviews submitted scope and authorisation confirmations before targets become available for testing. We may request supporting evidence where needed.</li>
            <li>Additional targets require explicit approval before testing. Discovery of an asset does not automatically authorise testing it.</li>
            <li>Approval of a hostname does not authorise testing unrelated services or other tenants on shared infrastructure.</li>
            <li>Customers can stop testing at any time using the platform.</li>
            <li>We may decline, suspend, or stop testing where authorisation is absent, withdrawn, or insufficient.</li>
          </ul>
          <p>Unless expressly included in the agreed scope, testing excludes denial-of-service and intentional load or stress testing, deliberately destructive exploitation, social engineering, and physical intrusion.</p>
        </section>
        <section>
          <h2>4. Isolated testing environments</h2>
          <p>Each testing engagement executes inside a dedicated Linux microVM with its own Linux kernel and hardware-level CPU virtualisation. Each environment is network-isolated from other customer environments and Cypen's internal systems and infrastructure.</p>
          <p>Outbound testing traffic passes through an independent sandbox firewall before reaching the internet. The firewall enforces the approved target scope and drops out-of-scope testing requests. These controls operate independently of the agent and cannot be changed by the agent to expand its testing permissions.</p>
          <p>Agents can reach only explicitly authorised targets for testing. Connections needed to operate the service, such as model inference and evidence storage, are separately controlled.</p>
        </section>
        <section>
          <h2>5. Customer data and evidence protection</h2>
          <p>We handle the information needed to scope, perform, and document authorised security testing. This may include:</p>
          <ul>
            <li>Domains, subdomains, IP addresses, asset inventories, and scope and approval records.</li>
            <li>Vulnerability findings, investigation notes, raw testing output, and penetration test reports.</li>
            <li>Evidence artefacts, including HTTP requests and responses, network packet captures, and screenshots.</li>
            <li>Customer-supplied access credentials and relevant testing context.</li>
          </ul>
          <p>Customer data and evidence are encrypted at rest. Transfers through Cypen's platform and service infrastructure are encrypted using TLS. Traffic generated when testing a customer target uses the protocols relevant to that target and the authorised test.</p>
          <p>Evidence is held in customer-scoped encrypted storage. Customer access is restricted to authorised users within the relevant organisation. Cypen personnel access is limited to authorised service delivery and permitted operational, professional, or legal purposes. Other customers cannot access your organisation's evidence or reports.</p>
          <p>We minimise unnecessary data extraction. Where reasonably practicable, we mask, redact, or truncate personal information in reports and model inputs without undermining the testing or evidentiary purpose.</p>
        </section>
        <section>
          <h2>6. AI data handling</h2>
          <p>Customer data and engagement fieldwork are excluded from model training.</p>
          <p>For model inference involving customer data, we use arrangements that:</p>
          <ul>
            <li>Prohibit training on model inputs and outputs.</li>
            <li>Provide zero data retention beyond transient processing.</li>
            <li>Apply these requirements to inference intermediaries and downstream model providers.</li>
            <li>Comply with the processing locations agreed for the engagement.</li>
          </ul>
          <p>These requirements govern how AI providers process data. They are separate from Cypen's retention of reports, evidence, and other engagement fieldwork, described below.</p>
        </section>
        <section>
          <h2>7. Data retention and deletion</h2>
          <p>Our retention and deletion practices distinguish between engagement records, active credentials, and protected backup copies:</p>
          <ul>
            <li><strong>Engagement fieldwork:</strong> We retain necessary reports, evidence, scope and approval records, investigation notes, and raw testing output for seven years after completion or termination of a penetration testing engagement, or expiry or termination of an AEV subscription. Retention supports service continuity for that customer and legitimate professional, insurance, and legal records.</li>
            <li><strong>Active access credentials:</strong> We securely delete customer-supplied credentials from active credential stores when the relevant engagement or subscription ends, or sooner when no longer needed. Customers should revoke or rotate supplied access when testing ends.</li>
            <li><strong>Credentials captured in evidence:</strong> Credentials embedded in captured evidence remain protected under the engagement fieldwork retention requirements.</li>
            <li><strong>Earlier deletion requests:</strong> Customers may request earlier deletion of fieldwork. We act on requests within 30 days, except for material we must retain or reasonably need for a lawful claim, investigation, or permitted record-keeping purpose. We explain any retained category and the reason for retaining it.</li>
            <li><strong>End of retention:</strong> We delete fieldwork at the end of the retention period, subject to lawful holds or required retention. We destroy or de-identify information earlier where privacy law requires it.</li>
            <li><strong>Backups and archives:</strong> Inaccessible backup or archive copies may remain where selective deletion is not reasonably practicable. These copies remain protected, subject to restricted use, applicable privacy duties, and ordinary retention cycles.</li>
          </ul>
          <p>Contact <M /> to request deletion or discuss retention requirements.</p>
        </section>
        <section>
          <h2>8. Audit trails and human oversight</h2>
          <p>We maintain timestamped audit trails of scope approvals and testing activity to support traceability, oversight, and investigation.</p>
          <p>Testing is agent-led, with human oversight and review. For direct customers, Cypen reviews and triages findings before making them available as customer findings or including them in a report. For partner engagements, the partner is responsible for reviewing, validating, triaging, and publishing findings.</p>
        </section>
        <section>
          <h2>9. Incident response</h2>
          <p>If a security breach affects customer data or confidential information, we notify the affected customer without undue delay and reasonably assist with assessment, containment, and response, including required breach assessments and notifications.</p>
          <p>For direct customers, critical vulnerabilities or evidence of an existing or previous compromise are escalated to the nominated contact without undue delay and within 24 hours of identification. For partner engagements, Cypen makes critical findings available to the partner, which is responsible for notifying its customer.</p>
        </section>
        <section>
          <h2>10. Processing locations</h2>
          <p>Processing locations depend on the engagement agreement.</p>
          <p>Where an Australian-only requirement is agreed before services begin, engagement storage, testing workloads, and model inference remain in Australia. Access to engagement content is restricted to authorised operators in Australia. Any exception requires express agreement before the affected processing.</p>
          <p>Other engagements may involve Australian and overseas processing, as set out in the applicable agreement. Business administration and development have separate processing arrangements and information limits.</p>
        </section>
        <section>
          <h2>11. Frequently asked questions</h2>
          <h3>How do we authorise testing?</h3>
          <p>Submit the domains, subdomains, and IP addresses you want included in scope through the platform, and confirm that you hold sufficient authority and any required third-party permissions. We review the submitted scope and authorisation confirmations before approved targets become available for testing. We may request supporting evidence or decline testing where authority is unclear. Customers remain responsible for ensuring their permissions cover the requested testing.</p>
          <h3>Are newly discovered assets tested automatically?</h3>
          <p>No. Newly discovered assets require explicit approval before testing. DNS association alone does not approve an additional asset, and approval of a hostname does not authorise testing unrelated services or other tenants on shared infrastructure.</p>
          <h3>Can we stop testing?</h3>
          <p>Customers can stop testing at any time using the platform. AEV customers can also pause and resume testing during the subscription term.</p>
          <h3>Is our data used to train AI models?</h3>
          <p>No. Customer data and engagement fieldwork are excluded from model training. Model inference involving customer data uses zero-data-retention arrangements beyond transient processing, covering both intermediaries and downstream model providers.</p>
          <h3>Can Cypen complete our security questionnaire?</h3>
          <p>Yes. Contact <M /> to request a security questionnaire response or supporting information about our controls.</p>
        </section>
        <section>
          <h2>12. Contact</h2>
          <p>For security questions, customer due diligence, security questionnaires, or data deletion requests, contact <M />.</p>
          <p>For information about how we handle personal information, see our <a className="inline" href="/privacy">Privacy Policy</a>.</p>
        </section>
      </LegalShell>
    </>
  );
}
