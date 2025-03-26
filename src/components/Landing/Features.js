"use client";

import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

// Feature Item Component
const FeatureItem = ({ title, description }) => (
  <div className="flex items-center gap-6">
    <div className="border border-[#1A1C1E] rounded-full p-3">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 5L5 9L13 1"
            stroke="#0F0F10"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <h3 className="text-sky-500 text-lg font-medium mb-1">{title}</h3>
      <p className="text-theme text-base">{description}</p>
    </div>
  </div>
);

// Feature Content Component
const FeatureContent = ({ title, features }) => (
  <div className="space-y-8">
    <h2 className="text-5xl font-semibold text-cyan-500 mb-4">{title}</h2>
    <div className="space-y-9">
      {features.map((feature) => (
        <FeatureItem key={feature.title} {...feature} />
      ))}
    </div>
    <Button as={Link} isExternal={true} href={"https://app.callvize.com"} className="bg-sky-500 text-white py-2 px-4 rounded">Get Started</Button>
  </div>
);

// Visual Content Map
const VISUAL_CONTENT_MAP = {
  default: (title) => (
    <div className="flex-1 h-[20rem] sm:h-[40rem] flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center z-10">
        <div className="flex flex-col p-4 tracking-tight text-theme sm:w-1/2 sm:h-[20rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-theme">{title}</h3>
          <div className="text-base m-0 p-0 font-normal">
            <span className="text-theme md:text-3xl text-xl">Never speechless again.</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500" />
        </div>
      </div>
    </div>
  ),
};

// Feature Section Component
const FeatureSection = ({ title, features, rightContent, isReversed }) => {
  const content = <FeatureContent title={title} features={features} />;
  const visualContent = rightContent || VISUAL_CONTENT_MAP.default(title);

  return (
    <div className={`flex flex-col gap-12 ${isReversed ? 'sm:flex-row-reverse' : ''}`}>
      {content}
    </div>
  );
};

// Feature Data
const FEATURES_DATA = {
  plan: {
    title: "Your AI-Powered Call Assistant",
    features: [
      { title: "Real-Time AI Suggestions", description: "Context-aware prompts during web calls to keep conversations flowing." },
      { title: "AI-Powered Sales Assistance", description: "Boost your sales performance with AI-driven responses and objection handling." },
      { title: "Live Coaching & Mentorship", description: "AI provides real-time advice and coaching during mentoring sessions or team meetings." },
      { title: "Technical Support for Engineers", description: "AI helps troubleshoot issues, suggest solutions, and provide technical guidance in live calls." },
      { title: "Seamless CRM & Calendar Integration", description: "Sync with your CRM and calendar for automatic logging, scheduling, and follow-ups." },
      { title: "Meeting Summaries & Action Points", description: "Generate key takeaways and next steps automatically after each call." },
      { title: "Customizable AI Responses", description: "Tailor AI suggestions to match your industry, role, and preferred communication style." },
      { title: "End-to-End Security & Privacy", description: "Your conversations are encrypted and stored securely to protect sensitive data." },
    ],
  },
};

// Main Component
export default function FeatureSections() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-screen-xl px-4">
        <FeatureSection {...FEATURES_DATA.plan} />
        {/* Add other FeatureSections as needed */}
      </div>
    </section>
  );
}
