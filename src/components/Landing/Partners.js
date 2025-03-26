"use client"

import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react"

export default function CompanyLogosCarousel() {
  const companies = [
    {
      logo: "https://www.example.com/logo1.png",
    },
    {
      logo: "https://www.example.com/logo2.png",
    },
    {
      logo: "https://www.example.com/logo3.png",
    },
    {
      logo: "https://www.example.com/logo4.png",
    },
    {
      logo: "https://www.example.com/logo5.png",
    },
    {
      logo: "https://www.example.com/logo6.png",
    },
    {
      logo: "https://www.example.com/logo7.png",
    },
    {
      logo: "https://www.example.com/logo8.png",
    },
    {
      logo: "https://www.example.com/logo9.png",
    },
    {
      logo: "https://www.example.com/logo10.png",
    },
  ];

  const [companiesData, setCompaniesData] = useState(companies)

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Scrolling Wrapper */}
      <div className="flex gap-4 w-max animate-scroll">
        {companiesData.map((company, index) => (
          <Card key={company.name} className="w-[300px] flex-shrink-0">
            <CardHeader className="justify-between">
              <div className="flex gap-2">
                <Avatar isBordered radius="full" size="sm" src={company.logo} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">{company.name}</h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Visit Website
                    </a>
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="flex items-center justify-center px-3 py-0">
              {/* Logo displayed */}
              
            </CardBody>
            <CardFooter className="gap-3">
              <Button color="primary" radius="full" size="sm">
                Learn More
              </Button>
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
