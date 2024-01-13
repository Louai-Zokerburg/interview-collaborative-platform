'use client'

import React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Button } from '@/components/ui/button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import IntrerviewQuestions from '@/components/InrerviewQuestions'
import { Room } from '@/components/Room'
import { CollaborativeEditor } from '@/components/CollaborativeEditor'




export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

const page = ({ params }: { params: { interviewId: string } }) => {
  return (
    <ResizablePanelGroup direction='horizontal' className='w-full h-screen pt-[60px] pl-[88px] flex justify-center items-center '>
      <ResizablePanel defaultSize={50}>
        <IntrerviewQuestions />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[calc(100vh-60px)] items-center justify-center">
          <Room roomId={params.interviewId}>
            <CollaborativeEditor />
          </Room>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default page