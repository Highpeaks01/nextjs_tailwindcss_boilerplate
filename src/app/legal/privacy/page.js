import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-theme p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-theme mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg text-theme mb-4">
          <strong>Effective Date:</strong> 10-05-2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-theme">1. Introduction</h2>
            <p className="text-lg text-theme">
              Callvize ("we," "our," or "us") is committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our real-time web-call assistance service powered by artificial intelligence ("AI"). By using our Service, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">2. Information We Collect</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>Personal Identification Information:</strong> Such as your name, email address, and other contact details when you register for or use our Service.</li>
              <li><strong>Audio Data:</strong> Computer audio from your web calls, which is recorded to provide real-time assistance.</li>
              <li><strong>Usage Data:</strong> Information about your interactions with our Service, including log data, device information, and analytics data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>Service Provision:</strong> To record and transcribe audio from web calls, generate AI-based hints, and display them on your interface.</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our Service's functionality and user experience.</li>
              <li><strong>Compliance and Protection:</strong> To comply with legal obligations and protect our rights and the rights of our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">4. Information Sharing and Disclosure</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>With Service Providers:</strong> We engage third-party service providers to assist with transcription and AI hint generation. These providers have access to your audio data solely for the purpose of providing these services and are contractually obligated to protect your information.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">5. Data Security</h2>
            <p className="text-lg text-theme">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">6. Data Retention</h2>
            <p className="text-lg text-theme">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">7. Your Rights</h2>
            <p className="text-lg text-theme">
              Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>Access:</strong> The right to request access to the personal information we hold about you.</li>
              <li><strong>Rectification:</strong> The right to request correction of inaccurate or incomplete personal information.</li>
              <li><strong>Erasure:</strong> The right to request deletion of your personal information under certain circumstances.</li>
              <li><strong>Restriction:</strong> The right to request restriction of processing your personal information.</li>
              <li><strong>Data Portability:</strong> The right to receive your personal information in a structured, commonly used, and machine-readable format.</li>
              <li><strong>Objection:</strong> The right to object to the processing of your personal information under certain circumstances.</li>
            </ul>
            <p className="text-lg text-theme">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">8. Compliance with C2PA, GDPR, and SOC 2</h2>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>C2PA Compliance:</strong> We adhere to the standards set by the Coalition for Content Provenance and Authenticity (C2PA) to ensure the integrity and authenticity of content processed by our Service.</li>
              <li><strong>GDPR Compliance:</strong> If you are located in the European Economic Area (EEA), we process your personal information in compliance with the General Data Protection Regulation (GDPR).</li>
              <li><strong>SOC 2 Compliance:</strong> We align our practices with the Service Organization Control 2 (SOC 2) standards, focusing on security, availability, processing integrity, confidentiality, and privacy to protect your information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">9. Changes to This Privacy Policy</h2>
            <p className="text-lg text-theme">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-theme">10. Contact Us</h2>
            <p className="text-lg text-theme">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-none pl-5 text-lg text-theme">
              <li><strong>Email:</strong> privacy@callvize.com</li>
              <li><strong>Address:</strong> V800 North King Street, Suite 304 2416 Wilmington, DE, 19801</li>
            </ul>
          </section>

          <section>
            <p className="text-lg text-theme">
              By using our Service, you acknowledge that you have read and understood this Privacy Policy and agree to our collection, use, and disclosure practices as described herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
