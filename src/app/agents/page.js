"use client"


import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBook, FaPlus } from "react-icons/fa";

export default function AgentsPage() {
    return (
      <>
        <h1 className="text-2xl">Agents</h1>
        <h2>Agents are text or voice AI chat bots you can integrate in your apps</h2>
        <h3>You can fully configure them to your business needs</h3>
        <div className="flex mt-2 gap-2">
          <Button
            onPress={() => handleCreateAgent()}
            className="px-4 py-2 rounded-xl"
            startContent={<FaPlus />}
          >
            Build
          </Button>
          <Button
            as={Link}
            href={"/docs"}
            className="px-4 py-2 rounded-xl"
            startContent={<FaBook />}
          >
            Docs
          </Button>
        </div>
      </>
    )
  }
  