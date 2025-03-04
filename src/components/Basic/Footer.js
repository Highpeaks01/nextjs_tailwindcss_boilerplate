import { Button, Link } from "@heroui/react"
import Socials from "../_Landing/Socials"
import ClientConfig from "@/components/client.config"

export default function Footer({}) {

  return (
    <footer className="w-full py-4 px-2">
      <div className="text-xs text-center">
        <div className="">
          <Link href="/" className="font-base bg-gradient-to-r from-cyan-300 via-sky-200 to-sky-400 inline-block text-transparent bg-clip-text">
            {ClientConfig.appName}
          </Link>
          <p className="text-default-500 font-light">
            {ClientConfig.appHeadline}
          </p>
        </div>

        {/*<Socials />*/}

        <div className="border-t-1 my-2"></div>
        <div className="text-xs mt-2 flex justify-center space-x-4 text-base font-light">
        <Button 
          as={Link} 
          isExternal={true} 
          href="https://blog.google/technology/ai/google-gen-ai-content-transparency-c2pa/" 
          className="border-1 border-theme bg-transparent px-3 py-2 rounded-xl text-xs text-theme">
            C2PA
          </Button>
          <Button 
          as={Link} 
          isExternal={true} 
          href="https://cloud.google.com/privacy/gdpr" 
          className="border-1 border-theme bg-transparent px-3 py-2 rounded-xl text-xs text-theme">
            GDPR
          </Button>
          <Button 
          as={Link} 
          isExternal={true} 
          href="https://cloud.google.com/security/compliance/soc-2" 
          className="border-1 border-theme bg-transparent px-3 py-2 rounded-xl text-xs text-theme">
            SOC II
          </Button>
        </div>
        <div className="text-xs mt-2 flex justify-center space-x-4 text-default-500 text-base font-light">
          <Link href="/about" className="text-xs text-theme">About</Link>
          <Link href="/legal/privacy" className="text-xs text-theme">Privacy</Link>
          <Link href="/legal/tos" className="text-xs text-theme">ToS</Link>
        </div>
        <div className="text-xs mt-2">
          <Link href="/" className="text-xs text-theme font-light">
            Copyright &copy; {new Date().getFullYear()} {ClientConfig.appName}
          </Link>
        </div>
      </div>
    </footer>
  )
}