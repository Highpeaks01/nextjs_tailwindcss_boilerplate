"use client"


import CallId from "@/components/src/components/Calls/CallId";
import { useParams } from "next/navigation";

export default function CallPage({}) {

  const params = useParams()
  const callId = params.callId

  return (
    <div className="flex w-full justify-center items-center bg-theme text-theme">
      <CallId
      callId={callId} 
      />
    </div>    
  )

}
  