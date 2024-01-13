import { DataTable } from "@/components/InterviewTable/DataTable"
import { Interview, columns } from "@/components/InterviewTable/columns"
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa"

const data: Interview[] = [
    {
        id: '1',
        title: 'Interview 1',
        creator: 'Creator 1',
        createdAt: '2021-10-10',
        language: 'TypeScript'

    },
    {
        id: '2',
        title: 'Interview 2',
        creator: 'Creator 2',
        createdAt: '2021-10-10',
        language: 'TypeScript'

    },
    {
        id: '3',
        title: 'Interview 3',
        creator: 'Creator 3',
        createdAt: '2021-10-10',
        language: 'TypeScript'

    },
    {
        id: '4',
        title: 'Interview 4',
        creator: 'Creator 4',
        createdAt: '2021-10-10',
        language: 'TypeScript'
    },
]


const page = () => {
    return (
        <section className='container pt-[60px] pl-[88px] flex justify-center flex-col items-center '>
            <div className="w-full flex justify-between items center my-4">
                <h1 className="text-2xl font-bold">Interviews</h1>
                <Button className='flex gap-x-2' variant="default"><FaPlus size={20} /> New interview</Button>
            </div>
            <DataTable data={data} columns={columns} />
        </section>
    )
}

export default page