'use client';
import { useState } from 'react';
import { Tabs, Tab } from '@heroui/react';
import { FaCircle, FaGlobe, FaTree } from 'react-icons/fa';


export default function Benefits() {
    return (
      <section className="w-full py-8 bg-theme text-theme">
        <div className="mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold leading-[57.6px] tracking-tight mb-6">
              Empower Your Product
              <br />
              Team
            </h2>
            <p className="text-lg text-[#EBECED] font-medium max-w-[800px] mx-auto leading-7">
              Focus. Speed. Quality. Elevate your product development with the
              <br />
              streamlined tools and proven practices of world-class teams.
            </p>
          </div>
  
          <div className="flex flex-col mb-6">
            <Tabs
              aria-label="Benefits Tabs"
              className="w-full flex justify-center rounded-xl p-2 mb-12"
              defaultSelectedKey="compliance"
            >
              <Tab
                key="compliance"
                title="Compliance First"
                className="px-6 py-3 flex justify-center rounded-lg text-base font-medium transition-all"
              >
                <ComplianceTab />
              </Tab>
              <Tab
                key="security"
                title="Safe & Secure"
                className="px-6 py-3 flex justify-center rounded-lg text-base font-medium transition-all"
              >
                <SecurityTab />
              </Tab>
              <Tab
                key="analytics"
                title="Dashboards & Analytics"
                className="px-6 py-3 flex justify-center rounded-lg text-base font-medium transition-all"
              >
                <AnalyticsTab />
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
  

function ComplianceTab() {
  return (
    <div className="relative flex justify-center items-center w-full py-4 max-w-[1200px] h-[460px] aspect-square rounded-[13px] bg-[#1A1C1E]">
      <FaCircle />
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="dark w-[1200px] flex justify-center items-center h-[460px] rounded-[13px] bg-[#1A1C1E] py-4">
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl border-2 border-[#404245] rounded-xl shadow-[0px_0px_8px_0px_rgba(255,255,255,0.09)_inset]">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Globe
        </span>
        <FaGlobe className="top-28" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="w-[1200px] flex justify-center items-center h-[380px] rounded-[13px] bg-[#1A1C1E]">
      <FaTree />
    </div>
  );
}
