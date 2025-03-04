"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <FaRobot size={80} className="text-gray-600 mb-4 animate-bounce" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! I'm lost... 🤖</h1>
      <p className="text-gray-600 mb-6">
        I searched my knowledge base, but this page doesn't exist. Maybe you can guide me?
      </p>
      <Button asChild className="px-6 py-3 text-lg">
        <Link href="/">Take me home</Link>
      </Button>
    </div>
  );
}
