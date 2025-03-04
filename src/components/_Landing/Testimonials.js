"use client"

import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react"

export default function Testimonials() {
  const dummies = [
    {
      avatar: "https://heroui.com/avatars/avatar-1.png",
      name: "Dr. Emily Carter",
      username: "emily_carter",
      isFollowed: false,
      post: "AI agents in healthcare are transforming patient care with faster diagnostics and predictive analytics. 🚑💡",
      tags: ["HealthcareAI", "MedTech", "Innovation"],
      following: 320,
      followers: "12.5K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-2.png",
      name: "Michael Davidson",
      username: "michael_fintech",
      isFollowed: false,
      post: "AI-powered financial models are helping investors make smarter decisions with real-time data. 📈🤖",
      tags: ["FinTech", "AI", "Investing"],
      following: 280,
      followers: "9.2K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-3.png",
      name: "Sophia Lee",
      username: "sophia_dev",
      isFollowed: false,
      post: "AI coding assistants are boosting developer productivity by automating repetitive tasks and suggesting best practices. 💻⚡",
      tags: ["AI4Code", "SoftwareEngineering", "Productivity"],
      following: 410,
      followers: "15.8K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-4.png",
      name: "Raj Patel",
      username: "raj_logistics",
      isFollowed: false,
      post: "AI-driven route optimization is cutting delivery times and improving supply chain efficiency. 🚛📦",
      tags: ["LogisticsAI", "SupplyChain", "Efficiency"],
      following: 195,
      followers: "7.4K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-5.png",
      name: "Lisa Chen",
      username: "lisa_marketing",
      isFollowed: false,
      post: "AI-powered content creation is changing digital marketing with hyper-personalized campaigns. 🎯📊",
      tags: ["MarketingAI", "GrowthHacking", "AdTech"],
      following: 340,
      followers: "11.6K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-6.png",
      name: "Daniel Wright",
      username: "daniel_cybersec",
      isFollowed: false,
      post: "AI security agents are detecting cyber threats before they happen, making online transactions safer. 🔒🛡️",
      tags: ["CyberSecurity", "AIProtection", "DataSafety"],
      following: 270,
      followers: "8.9K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-7.png",
      name: "Hannah Fischer",
      username: "hannah_legal",
      isFollowed: false,
      post: "Legal AI is streamlining contract analysis and case research, making law firms more efficient. ⚖️📜",
      tags: ["LegalTech", "AIinLaw", "Efficiency"],
      following: 220,
      followers: "6.8K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-8.png",
      name: "Carlos Gomez",
      username: "carlos_support",
      isFollowed: false,
      post: "AI chatbots are improving customer service with 24/7 availability and instant responses. 📞🤖",
      tags: ["CustomerSupport", "AIChatbots", "Automation"],
      following: 310,
      followers: "10.3K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-9.png",
      name: "Nina Kovacs",
      username: "nina_research",
      isFollowed: false,
      post: "AI-powered research assistants are accelerating scientific discoveries by analyzing massive datasets. 🧬🔍",
      tags: ["AI4Science", "Research", "BigData"],
      following: 275,
      followers: "9.5K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-10.png",
      name: "Jason Brooks",
      username: "jason_retail",
      isFollowed: false,
      post: "Retail AI is optimizing inventory management and predicting consumer trends. 🛍️📈",
      tags: ["RetailAI", "Ecommerce", "DataDriven"],
      following: 290,
      followers: "8.7K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-11.png",
      name: "Olivia Nguyen",
      username: "olivia_hr",
      isFollowed: false,
      post: "AI-powered HR tools are making talent acquisition smarter and fairer. 🤝📑",
      tags: ["HRTech", "AIAssist", "Hiring"],
      following: 240,
      followers: "7.9K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-12.png",
      name: "Ethan Johnson",
      username: "ethan_edu",
      isFollowed: false,
      post: "AI tutors are personalizing learning experiences for students worldwide. 🎓📚",
      tags: ["EdTech", "AI4Education", "PersonalizedLearning"],
      following: 260,
      followers: "9.1K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-13.png",
      name: "Gabriela Silva",
      username: "gabriela_design",
      isFollowed: false,
      post: "AI-powered design tools are making creative work faster and more innovative. 🎨🖌️",
      tags: ["AI4Design", "CreativeAI", "UX"],
      following: 280,
      followers: "10.2K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-14.png",
      name: "William Scott",
      username: "will_data",
      isFollowed: false,
      post: "AI is making data analysis more accessible, even for non-technical users. 📊📉",
      tags: ["DataScience", "NoCodeAI", "Insights"],
      following: 250,
      followers: "8.4K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-15.png",
      name: "Samantha Evans",
      username: "samantha_health",
      isFollowed: false,
      post: "AI in mental health is providing better access to resources and support. 🧠💙",
      tags: ["MentalHealthAI", "HealthTech", "Support"],
      following: 230,
      followers: "7.6K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-16.png",
      name: "Robert Hayes",
      username: "robert_aiethics",
      isFollowed: false,
      post: "AI ethics is crucial as we integrate AI into society. Responsible AI development is key! ⚖️🤖",
      tags: ["AIEthics", "ResponsibleAI", "TechPolicy"],
      following: 300,
      followers: "11.1K",
    },
  ];  

  const [testimonials, setTestimonials] = useState(dummies)

  const onFollowClick = (isFollowed, username) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((t) =>
        t.username === username ? { ...t, isFollowed: !isFollowed } : t
      )
    )
  }

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Scrolling Wrapper */}
      <div className="flex gap-4 w-max animate-scroll">
        {testimonials.map((t, index) => (
            <Card key={t.username} className="w-[300px] flex-shrink-0">
            <CardHeader className="justify-between">
              <div className="flex gap-2">
                <Avatar isBordered radius="full" size="sm" src={t.avatar} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">{t.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">@{t.username}</h5>
                </div>
              </div>
              <Button
                className={"text-foreground border-default-200"}
                color="primary"
                radius="full"
                size="sm"
                onPress={() => onFollowClick(t.isFollowed, t.username)}
              >
                {t.isFollowed ? "Unfollow" : "Follow"}
              </Button>
            </CardHeader>
          
            <CardBody className="flex line-clamp-3 px-3 py-0 text-small text-default-400">
              <p className="text-pretty break-normal whitespace-normal">{t.post}</p>
              <div className="flex gap-1">
                {t.tags.map((tag, index) => (
                  <span key={index} className="pt-2 text-xs text-blue-500">#{tag}</span>
                ))}
              </div>
            </CardBody>
          
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-gray-400 text-small">{t.following}</p>
                <p className="text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-gray-400 text-small">{t.followers}</p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>          
        ))}
      </div>

      {/* Tailwind Keyframe for Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 180s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
