import { Card, Listbox, Chip, Popover } from '@heroui/react';

// Feature Item Component
const FeatureItem = ({ title, description }) => (
  <div className="flex items-center gap-6">
    <div className="border border-[#1A1C1E] rounded-full">
      <div className="w-6 h-6 rounded-full bg-[#46B235] flex items-center justify-center m-3">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
      <h3 className="text-[#EBECED] text-lg font-medium mb-1">{title}</h3>
      <p className="text-[#B9BBC1] text-base">{description}</p>
    </div>
  </div>
);

// Feature Content Component
const FeatureContent = ({ title, features }) => (
  <div className="space-y-8">
    <h2 className="text-5xl font-semibold text-[#EBECED] mb-2">{title}</h2>
    <div className="space-y-9">
      {features.map((feature) => (
        <FeatureItem
          key={feature.title}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    <button className="bg-[#46B235] text-white py-2 px-4 rounded">Get started</button>
  </div>
);

// Visual Content Map
const VISUAL_CONTENT_MAP = {
  default: (title) => (
    <div className="flex-1 h-[20rem] flex items-center justify-center">
      <div className="h-[40rem] w-full flex items-center justify-center z-10">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Structure your work and visualize your workflow.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-500 via-purple-500 to-green-500" />
        </div>
      </div>
    </div>
  ),
  // Add other visual content mappings as needed
};

// Feature Section Component
const FeatureSection = ({ title, features, rightContent, isReversed }) => {
  const content = <FeatureContent title={title} features={features} />;
  const visualContent = rightContent || VISUAL_CONTENT_MAP.default(title);

  return (
    <div className="flex justify-between items-center gap-12">
      {isReversed ? (
        <>
          {visualContent}
          {content}
        </>
      ) : (
        <>
          {content}
          {visualContent}
        </>
      )}
    </div>
  );
};

// Feature Data
const FEATURES_DATA = {
  plan: {
    title: 'Plan & Organize',
    features: [
      {
        title: 'Capture & Prioritize Ideas',
        description: 'Vote and prioritize features based on importance.',
      },
      {
        title: 'Structure Your Work',
        description: 'Create dedicated projects for clear organization.',
      },
      {
        title: 'Visualize Workflow',
        description: 'Track progress of tasks across different stages.',
      },
    ],
  },
  // Add other feature data as needed
};

// Main Component
export default function FeatureSections() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-[1200px] flex justify-between flex-col gap-24">
        <FeatureSection {...FEATURES_DATA.plan} />
        {/* Add other FeatureSections as needed */}
      </div>
    </section>
  );
}
