import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-theme py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-theme p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-theme mb-6">
          Real-Time Web-Call Assistance Powered by AI
        </h1>

        <p className="text-lg text-theme mb-4">
          Callvize is a cutting-edge service that leverages the power of Artificial Intelligence (AI) to provide real-time web-call assistance. Whether you're in a business meeting, a webinar, or any online collaboration, our service enhances your communication by providing helpful suggestions and transcriptions.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-theme">How It Works</h2>
            <p className="text-lg text-theme">
              Our service operates seamlessly in the background of your web calls, offering real-time assistance in four simple steps:
            </p>
            <ul className="list-decimal pl-5 text-lg text-theme">
              <li><strong>Audio Recording:</strong> We record the computer audio during your web call.</li>
              <li><strong>Audio Transcription:</strong> The recorded audio is transcribed into text using advanced AI technology.</li>
              <li><strong>AI-Powered Hints:</strong> Based on the transcription, the AI generates helpful hints or suggestions to assist with your conversation.</li>
              <li><strong>Real-Time Display:</strong> The generated hints are displayed in real-time on your interface for immediate use.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-theme">Why Choose Callvize?</h2>
            <p className="text-lg text-theme">
              Our service enhances productivity and communication in any online meeting. Here’s why you should choose us:
            </p>
            <ul className="list-disc pl-5 text-lg text-theme">
              <li><strong>Effortless Integration:</strong> Easily integrate with your preferred web-calling platform.</li>
              <li><strong>Real-Time Assistance:</strong> Receive actionable hints and transcriptions without interrupting your flow.</li>
              <li><strong>Improved Communication:</strong> Make meetings more effective with timely suggestions and helpful insights.</li>
              <li><strong>AI-Powered Accuracy:</strong> Benefit from our powerful AI to enhance the quality of your interactions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-theme">Privacy and Security</h2>
            <p className="text-lg text-theme">
              We take your privacy and data security seriously. Your audio data is securely processed and stored, ensuring that your meetings remain confidential and protected. Our service complies with industry standards, including GDPR and SOC 2, ensuring the highest level of data protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-theme">Get Started Today</h2>
            <p className="text-lg text-theme">
              Ready to take your web calls to the next level? Sign up for Callvize today and experience the future of communication with AI-powered real-time assistance!
            </p>
            <div className="mt-6 text-center">
              <a
                href="/"
                className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
