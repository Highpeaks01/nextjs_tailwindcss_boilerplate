import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@heroui/react';
import ClientConfig from '@/components/client.config';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is Lighting?',
      answer: 'Cut Through the Confusion: Explore Lighting FAQs',
    },
    {
      question: 'Who is Lighting for?',
      answer:
        'Lighting is ideal for product teams of all sizes, from startups to established organizations.',
    },
    {
      question: 'Can I import my projects from another tool?',
      answer:
        'Currently, Linear does not offer direct import functionality from other tools. However, you can manually migrate your projects by creating tasks and issues in Linear.',
    },
    {
      question: 'What are projects and issues in Lighting?',
      answer:
        'Projects are used to organize your work at a high level, while issues represent individual tasks or bugs within a project.',
    },
    {
      question: 'Can I integrate Lighting with other tools?',
      answer:
        'Yes, Lighting offers robust integration capabilities with popular development and productivity tools.',
    },
    {
      question: 'Is my data secure in Lighting?',
      answer:
        'We implement industry-standard security measures to protect your data, including encryption and regular security audits.',
    },
    {
      question: 'How do I upgrade my plan?',
      answer:
        'You can easily upgrade your plan through your account settings. Choose from our flexible pricing options that scale with your needs.',
    },
  ];

  return (
    <section className="w-full py-24 px-16 bg-theme text-theme ">
      <div className="mx-auto">
        <p className="text-2xl text-center mb-16">
          Everything You Need to Know About {ClientConfig.appName}.
        </p>
        <Accordion 
            variant="light"
            motionProps={{
                variants: {
                enter: {
                    y: 0,
                    opacity: 1,
                    height: "auto",
                    overflowY: "unset",
                    transition: {
                    height: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 1,
                    },
                    opacity: {
                        easings: "ease",
                        duration: 1,
                    },
                    },
                },
                exit: {
                    y: -10,
                    opacity: 0,
                    height: 0,
                    overflowY: "hidden",
                    transition: {
                    height: {
                        easings: "ease",
                        duration: 0.25,
                    },
                    opacity: {
                        easings: "ease",
                        duration: 0.3,
                    },
                    },
                },
                },
            }}
          >
          {faqs.map((faq, index) => (
            <AccordionItem 
                key={index}
                title={<p className="text-theme bg-theme">{faq.question}</p>}
            >
                <p className="">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
