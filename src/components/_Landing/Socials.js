import { Button, Link } from '@heroui/react'
import { FaRedditAlien, FaDiscord } from 'react-icons/fa' // Icons from react-icons


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
        
        {/* Reddit Button */}
        <Button
            as={Link}
            radius={"full"}
            href="https://priveeai.com/reddit"
            isExternal
            className="w-64 bg-transparent border border-default-100 text-default-800 py-6"
        >
            <FaRedditAlien className="mr-2 text-2xl" />
            Join us on Reddit
        </Button>

        {/* Discord Button */}
        <Button
          as={Link}
          radius={"full"}
          href="https://priveeai.com/discord"
          isExternal
          className="w-64 bg-transparent border border-default-100 text-default-800 py-6"
        >
            <FaDiscord className="mr-2 text-2xl" />
            Join us on Discord
        </Button>
      </div>
    </div>
  )
}