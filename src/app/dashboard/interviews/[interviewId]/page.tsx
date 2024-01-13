'use client'

import React from 'react'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import IntrerviewQuestions from '@/components/InrerviewQuestions'
import { Room } from '@/components/Room'
import { CollaborativeEditor } from '@/components/CollaborativeEditor'


const InterviewPage = ({ params }: { params: { interviewId: string } }) => {
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

export default InterviewPage