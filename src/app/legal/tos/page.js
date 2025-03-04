import React from 'react';

const ToS = () => {
  return (
    <div className="min-h-screen bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-theme p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-theme mb-6">
          Terms of Service
        </h1>
        <p className="text-lg text-theme mb-4">
          <strong>Effective Date:</strong> 10-05-2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-theme">1. Acceptance of Terms</h2>
            <p className="text-lg text-theme">
              By accessing or using Callvize ("the Service"), you ("User") agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">2. Description of Service</h2>
            <p className="text-lg text-theme">
              Callvize provides real-time web-call assistance by leveraging artificial intelligence ("AI"). The Service operates as follows:
            </p>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li>Audio Recording: The Service records the computer audio during web calls.</li>
              <li>Transcription: The recorded audio is transcribed using an external API.</li>
              <li>Hint Generation: Based on the transcription, the Service generates hints using an external AI API.</li>
              <li>Hint Retrieval: The generated hints are displayed on the User's interface in real-time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">3. User Responsibilities</h2>
            <p className="text-lg text-theme">
              Users agree to:
            </p>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li>Ensure that all participants in a web call are informed about and consent to the recording of audio.</li>
              <li>Use the Service in compliance with all applicable laws and regulations.</li>
              <li>Not use the Service for any unlawful, harmful, or malicious purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">4. Consent to Audio Recording</h2>
            <p className="text-lg text-theme">
              By using the Service, Users consent to the recording of computer audio during web calls. Users are responsible for obtaining consent from all participants involved in the web call. The Service is not liable for any failure by the User to obtain necessary consents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">5. Data Processing and Privacy</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li>The recorded audio will be processed by external APIs for transcription and hint generation purposes.</li>
              <li>Transcriptions and generated hints are stored temporarily to facilitate real-time assistance and may be retained for quality assurance and service improvement purposes.</li>
              <li>The Service utilizes third-party APIs for transcription and AI-based hint generation. While the Service strives to engage reputable providers, it does not control these external APIs and is not responsible for their data handling practices.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">6. Compliance with C2PA, GDPR, and SOC 2</h2>
            <p className="text-lg text-theme">
              The Service adheres to the standards set forth by the Coalition for Content Provenance and Authenticity (C2PA), GDPR, and SOC 2 compliance standards.
            </p>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li>C2PA Compliance: The Service ensures the integrity and authenticity of content processed by the Service.</li>
              <li>GDPR Compliance: The Service complies with the General Data Protection Regulation (GDPR).</li>
              <li>SOC 2 Compliance: The Service aligns with the SOC 2 standards, covering security, availability, processing integrity, confidentiality, and privacy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">7. Intellectual Property</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li>Service Content: All content provided by the Service is the property of Callvize or its licensors and is protected by intellectual property laws.</li>
              <li>User Content: Users retain ownership of any content they submit or transmit through the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">8. Disclaimer of Warranties</h2>
            <p className="text-lg text-theme">
              The Service is provided "as is" and "as available," without any warranties of any kind, express or implied. Callvize does not warrant that the Service will be uninterrupted, error-free, or free from viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">9. Limitation of Liability</h2>
            <p className="text-lg text-theme">
              To the fullest extent permitted by law, Callvize shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">10. Indemnification</h2>
            <p className="text-lg text-theme">
              Users agree to indemnify and hold harmless Callvize from any claims arising out of their use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">11. Modifications to Service</h2>
            <p className="text-lg text-theme">
              Callvize reserves the right to modify or discontinue the Service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">12. Governing Law</h2>
            <p className="text-lg text-theme">
              These Terms shall be governed by the laws of [Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">13. Dispute Resolution</h2>
            <p className="text-lg text-theme">
              Any disputes shall be resolved through binding arbitration in [Location].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">14. Severability</h2>
            <p className="text-lg text-theme">
              If any provision is found unenforceable, it will not affect the remaining provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">15. Entire Agreement</h2>
            <p className="text-lg text-theme">
              These Terms constitute the entire agreement between Users and Callvize.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ToS;
