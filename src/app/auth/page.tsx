import SigninForm from "@/components/forms/SigninFrom"
import SignupForm from "@/components/forms/SignupForm"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import createSupabaseServereComponentClient from "@/lib/supabase/createSupabaseServereComponentClient"
import { redirect } from "next/navigation"

export default async function AuthPage() {
    const supabase = createSupabaseServereComponentClient()

    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
        redirect('/dashboard')
    }

    return (
        <section className="w-full h-screen flex justify-center items-center p-2">
            <Tabs defaultValue="signin" className="w-[500px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">sign in</TabsTrigger>
                    <TabsTrigger value="signup">Sign up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign in to your account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <SigninForm />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign up for a new account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <SignupForm />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    )
}
