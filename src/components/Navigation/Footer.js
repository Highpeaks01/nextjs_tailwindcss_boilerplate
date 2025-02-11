import { Button, Link } from "@heroui/react"
import Socials from "../Socials"
import ClientConfig from "@/components/client.config"

export default function Footer({}) {

  return (
    <footer className="w-full py-4 px-2">
      <div className="text-center">
        <div className="">
          <Link href="/" className="font-base text-3xl bg-gradient-to-r from-lime-300 via-emerald-200 to-green-400 inline-block text-transparent bg-clip-text">
            {ClientConfig.appName}
          </Link>
          <p className="text-default-500 font-light text-xl">
            {ClientConfig.appHeadline}
          </p>
        </div>

        <Socials />

        <div className="border-t-1 my-6"></div>
        <div className="mt-4 flex justify-center space-x-4 text-base font-light md:text-xs">
          <Link href="/about" className="text-theme">About</Link>
          <Link href="/blog" className="text-theme">Blog</Link>
          <Link href="/guides" className="text-theme">Guides</Link>
        </div>
        <div className="mt-4 flex justify-center space-x-4 text-default-500 text-base font-light md:text-xs">
          <Link href="/legal/" className="text-theme">Legal</Link>
          <Link href="/legal/privacy" className="text-theme">Privacy</Link>
          <Link href="/legal/tos" className="text-theme">ToS</Link>
        </div>
        <div className="mt-12 text-sm md:text-xs">
          <Link href="/" className="text-theme font-light">
            Copyright &copy; {new Date().getFullYear()} {ClientConfig.appName}
          </Link>
        </div>
      </div>
    </footer>
  )
}