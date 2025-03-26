import { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@heroui/react';
import ClientConfig from '@/components/client.config';

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Callvize?",
      answer: "Callvize is an AI-powered assistant that provides real-time prompt suggestions during web calls, helping professionals communicate effectively."
    },
    {
      question: "Who is Callvize for?",
      answer: "Callvize is designed for salespeople, mentors, engineers, and anyone who wants AI-driven support in real-time conversations."
    },
    {
      question: "Can I integrate Callvize with other tools?",
      answer: "Yes! Callvize seamlessly integrates with popular video conferencing tools to enhance your workflow."
    },
    {
      question: "How does Callvize generate responses?",
      answer: "Callvize uses advanced AI and context-aware algorithms to suggest relevant responses based on the conversation in real time."
    },
    {
      question: "Is my data secure with Callvize?",
      answer: "Absolutely! We prioritize security with end-to-end encryption and strict privacy policies to protect your conversations."
    },
    {
      question: "How do I get started with Callvize?",
      answer: "Simply sign up, connect your preferred communication tool, and start receiving AI-powered suggestions instantly."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! You can try Callvize for free with our trial plan before committing to a subscription."
    }
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
