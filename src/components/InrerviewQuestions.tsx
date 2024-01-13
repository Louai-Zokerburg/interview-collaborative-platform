'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const interviewQuestions = [
    {
        id: '1',
        question: 'Question 1',
        answer: 'Answer 1',
        questionBody: 'Question Body 1',
    },
    {
        id: '2',
        question: 'Question 2',
        answer: 'Answer 2',
        questionBody: 'Question Body 2',
    },
    {
        id: '3',
        question: 'Question 3',
        answer: 'Answer 3',
        questionBody: 'Question Body 3',
    },
    {
        id: '4',
        question: 'Question 4',
        answer: 'Answer 4',
        questionBody: 'Question Body 4',
    },
    {
        id: '5',
        question: 'Question 5',
        answer: 'Answer 5',
        questionBody: 'Question Body 5',
    },
    {
        id: '6',
        question: 'Question 6',
        answer: 'Answer 6',
        questionBody: 'Question Body 6',
    },
    {
        id: '7',
        question: 'Question 7',
        answer: 'Answer 7',
        questionBody: 'Question Body 7',
    },
    {
        id: '8',
        question: 'Question 8',
        answer: 'Answer 8',
        questionBody: 'Question Body 8',
    },
    {
        id: '9',
        question: 'Question 9',
        answer: 'Answer 9',
        questionBody: 'Question Body 9',
    },
    {
        id: '10',
        question: 'Question 10',
        answer: 'Answer 10',
        questionBody: 'Question Body 10',
    },
    {
        id: '11',
        question: 'Question 11',
        answer: 'Answer 11',
        questionBody: 'Question Body 11',
    },
    {
        id: '12',
        question: 'Question 12',
        answer: 'Answer 12',
        questionBody: 'Question Body 12',
    },
    {
        id: '13',
        question: 'Question 13',
        answer: 'Answer 13',
        questionBody: 'Question Body 13',
    },
    {
        id: '14',
        question: 'Question 14',
        answer: 'Answer 14',
        questionBody: 'Question Body 14',
    },
    {
        id: '15',
        question: 'Question 15',
        answer: 'Answer 15',
        questionBody: 'Question Body 15',
    }
]

const IntrerviewQuestions = () => {

    const [currentQ, setCurrentQ] = useState<number>(0)

    const lastQuestion = currentQ >= interviewQuestions.length - 1
    const firstQuestion = currentQ <= 0


    const handleNextQuestion = () => {
        if (lastQuestion) return
        setCurrentQ(prev => prev + 1)
    }
    const handlePrevQuestion = () => {
        if (firstQuestion) return
        setCurrentQ(prev => prev - 1)
    }

    return (
        <div className="flex h-[calc(100vh-60px)] items-center flex-col justify-start border-r-2">
            <div className='w-full flex justify-between items-center py-2 px-4 border-b-2 h-[50px]'>
                <h4 className='text-lg'>{interviewQuestions[currentQ].question}</h4>
                <div className='flex space-x-1'>
                    <Button variant='outline' size='icon' onClick={handlePrevQuestion} disabled={firstQuestion} >
                        <FaArrowLeft size={18} />
                    </Button>
                    <Button variant='outline' size='icon' onClick={handleNextQuestion} disabled={lastQuestion} >
                        <FaArrowRight size={18} />
                    </Button>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                {interviewQuestions[currentQ].questionBody}
            </div>
        </div>
    )
}

export default IntrerviewQuestions