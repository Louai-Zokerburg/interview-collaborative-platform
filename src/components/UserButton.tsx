import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import ThemeToggle from "./ThemeToggle"
import SignOutBtn from "./SignOutBtn"
import createSupabaseServereComponentClient from "@/lib/supabase/createSupabaseServereComponentClient"


const UserBtn = async () => {

    const supabase = await createSupabaseServereComponentClient()

    const { data: { user } } = await supabase.auth.getUser()


    const userInitials = user?.user_metadata?.name.toUpperCase().slice(0, 2)

    return (
        <Popover>
            <PopoverTrigger asChild>
                <span className="w-10 h-10 box-border cursor-pointer bg-primary text-primary-foreground flex justify-center items-center font-bold rounded-full">
                    {userInitials}
                </span>
            </PopoverTrigger>
            <PopoverContent className="w-60 lg:w-80 mt-2 mr-1 gap-y-4 flex flex-col justify-start items-start">
                <div>
                    <h4 className="text-xl">Account</h4>

                    <p className="text-sm">{user?.email}</p>
                </div>
                <div className="w-full">
                    <h4 className="text-xl">Theme</h4>
                    <ThemeToggle />
                </div>
                <SignOutBtn />
            </PopoverContent>
        </Popover>

    )
}

export default UserBtn