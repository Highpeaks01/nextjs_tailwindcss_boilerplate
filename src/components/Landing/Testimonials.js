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
      post: "Callvize is revolutionizing communication! AI-powered prompts help professionals speak with clarity and confidence in web calls. 🎤💡",
      tags: ["Callvize", "AICommunication", "SmartTalk"],
      following: 320,
      followers: "12.5K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-2.png",
      name: "Michael Davidson",
      username: "michael_fintech",
      isFollowed: false,
      post: "Callvize is a game-changer for sales teams—real-time AI suggestions turn every call into a winning conversation. 📈🤖",
      tags: ["SalesAI", "Callvize", "CloseDeals"],
      following: 280,
      followers: "9.2K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-3.png",
      name: "Sophia Lee",
      username: "sophia_dev",
      isFollowed: false,
      post: "Developers, imagine never being stuck on a call again! Callvize provides instant AI-powered technical insights during conversations. 💻⚡",
      tags: ["Callvize", "DevAI", "TechSupport"],
      following: 410,
      followers: "15.8K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-4.png",
      name: "Raj Patel",
      username: "raj_logistics",
      isFollowed: false,
      post: "With Callvize, logistics teams handle customer calls seamlessly with AI-generated responses, reducing stress and improving efficiency. 🚛📦",
      tags: ["Callvize", "LogisticsAI", "SmartSupport"],
      following: 195,
      followers: "7.4K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-5.png",
      name: "Lisa Chen",
      username: "lisa_marketing",
      isFollowed: false,
      post: "Marketing calls just got easier! Callvize AI helps pitch ideas smoothly, handle objections, and close deals faster. 🎯📊",
      tags: ["Callvize", "MarketingAI", "GrowthHacking"],
      following: 340,
      followers: "11.6K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-6.png",
      name: "Daniel Wright",
      username: "daniel_cybersec",
      isFollowed: false,
      post: "Callvize ensures cybersecurity professionals communicate clearly under pressure, with AI-driven responses during critical calls. 🔒🛡️",
      tags: ["CyberSecurity", "Callvize", "AIProtection"],
      following: 270,
      followers: "8.9K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-7.png",
      name: "Hannah Fischer",
      username: "hannah_legal",
      isFollowed: false,
      post: "Lawyers can now navigate complex legal calls effortlessly—Callvize provides AI-powered insights and case references in real time. ⚖️📜",
      tags: ["LegalTech", "Callvize", "SmartLaw"],
      following: 220,
      followers: "6.8K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-8.png",
      name: "Carlos Gomez",
      username: "carlos_support",
      isFollowed: false,
      post: "Customer service just got an upgrade! Callvize AI enhances support calls with smart replies and instant solutions. 📞🤖",
      tags: ["CustomerSupport", "Callvize", "AIChat"],
      following: 310,
      followers: "10.3K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-9.png",
      name: "Nina Kovacs",
      username: "nina_research",
      isFollowed: false,
      post: "Callvize AI accelerates research discussions by providing key data points and intelligent insights during calls. 🧬🔍",
      tags: ["Callvize", "ResearchAI", "BigData"],
      following: 275,
      followers: "9.5K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-10.png",
      name: "Jason Brooks",
      username: "jason_retail",
      isFollowed: false,
      post: "Retail professionals can now ace supplier negotiations—Callvize provides AI-driven talk tracks for better deals. 🛍️📈",
      tags: ["RetailAI", "Callvize", "Ecommerce"],
      following: 290,
      followers: "8.7K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-11.png",
      name: "Olivia Nguyen",
      username: "olivia_hr",
      isFollowed: false,
      post: "HR teams love Callvize! AI-powered coaching ensures smoother interviews and better candidate engagement. 🤝📑",
      tags: ["HRTech", "Callvize", "SmartHiring"],
      following: 240,
      followers: "7.9K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-12.png",
      name: "Ethan Johnson",
      username: "ethan_edu",
      isFollowed: false,
      post: "Teachers and students benefit from Callvize—AI helps structure discussions and provide instant learning insights. 🎓📚",
      tags: ["EdTech", "Callvize", "AI4Education"],
      following: 260,
      followers: "9.1K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-13.png",
      name: "Gabriela Silva",
      username: "gabriela_design",
      isFollowed: false,
      post: "Design teams collaborate effortlessly with Callvize—AI helps explain ideas clearly and structure feedback calls. 🎨🖌️",
      tags: ["Callvize", "DesignAI", "UX"],
      following: 280,
      followers: "10.2K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-14.png",
      name: "William Scott",
      username: "will_data",
      isFollowed: false,
      post: "Data analysts can now present insights clearly with Callvize—AI ensures confident and concise communication. 📊📉",
      tags: ["DataScience", "Callvize", "SmartAnalytics"],
      following: 250,
      followers: "8.4K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-15.png",
      name: "Samantha Evans",
      username: "samantha_health",
      isFollowed: false,
      post: "Mental health professionals trust Callvize—AI assists in guiding conversations with empathy and clarity. 🧠💙",
      tags: ["MentalHealthAI", "Callvize", "Support"],
      following: 230,
      followers: "7.6K",
    },
    {
      avatar: "https://heroui.com/avatars/avatar-16.png",
      name: "Robert Hayes",
      username: "robert_aiethics",
      isFollowed: false,
      post: "Ethical AI communication matters! Callvize ensures responsible AI-driven conversations in every industry. ⚖️🤖",
      tags: ["AIEthics", "Callvize", "ResponsibleAI"],
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
              <div className="flex mt-4 gap-1">
                {t.tags.map((tag, index) => (
                  <span key={index} className="pt-2 text-xs text-blue-500">#{tag}</span>
                ))}
              </div>
            </CardBody>
          
            <CardFooter className="mt-2 gap-3">
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
