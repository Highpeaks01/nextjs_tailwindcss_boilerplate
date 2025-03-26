import { Button, Link } from '@heroui/react'
import { FaLinkedin } from 'react-icons/fa' // Icons from react-icons


export default function Socials ({}) {
  return (
    <div className="py-12 px-6 text-center">
      
      {/* Title */}
      <h1 className="text-default-900 text-3xl md:text-4xl font-light mb-4">
        Join our Community!
      </h1>
      
      {/* Subtitle */}
      <p className="text-default-500 text-lg md:text-xl mb-8 font-thin">
        Discover amazing AI characters, share ideas, and be part of the growing community.
      </p>
      
      {/* Social Buttons */}
      <div className="md:flex md:justify-center md:space-x-4 md:space-y-0 space-y-2">

        {/* Linkedin Button */}
        <Button
          as={Link}
          radius={"full"}
          href="https://www.linkedin.com/company/callvize"
          isExternal
          className="w-64 bg-transparent border border-default-100 text-default-800 py-6"
        >
            <FaLinkedin className="mr-2 text-2xl" />
            Join us on Linkedin
        </Button>
      </div>
    </div>
  )
}