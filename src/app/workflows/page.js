"use client"


import { Button, Card, CardBody, CardFooter, CardHeader, useDisclosure } from "@heroui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBook, FaCopy, FaPlus, FaTrash } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6"

export default function WorkflowsPage() {

  const [ workflows, setWorkflows ] = useState([{title: "sample", description:"sample description", id: "123456"}])

  useEffect(() => {
    //fetch user existing workflows and set them 
  }, [])

  const newWorkflow = useDisclosure()

  return (
    <div className="p-6">
      <h1 className="text-2xl">Workflows</h1>
      <h2>Workflows are logical paths your agents follow to perform a set of actions</h2>
      <h3>You can fully configure them to your business needs</h3>
      <div className="flex mt-2 gap-2">
        <Button
          onPress={() => newWorkflow.onOpen()}
          className="px-4 py-2 rounded-xl"
          startContent={<FaPlus />}
        >
          New Workflow
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
      <div className="mt-8 flex grid grid-cols-3">
        {workflows ? (
          workflows.map(workflow => (
            <Card 
              key={workflow.id}
              className="p-2 text-theme"
            >
              <CardHeader className="flex items-center justify-between">
                <span>{workflow.title}</span>
                
                <div className="flex space-x-2">
                  <Button 
                    className="bg-transparent p-0 h-auto w-auto min-w-0"
                    startContent={<FaTrash />}
                    onPress={() => handleDeleteWorkflow(workflow)}
                  />
                  <Button 
                    className="bg-transparent p-0 h-auto w-auto min-w-0"
                    startContent={<FaCopy />}
                    onPress={() => handleDuplicateWorkflow(workflow)}
                  />
                </div>
              </CardHeader>
              <CardBody>{workflow.description}</CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="px-4 py-2 bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500"
                  href={`/workflows/${workflow.id}`} 
                >
                  Open Workflow
                </Button>
              </CardFooter>
            </Card>
          ))) : (
            <p>You have no workflows</p>
          )}
      </div>

    </div>
  )
  }
  