"use client"

import { useTransition } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


import { SignupValidation } from "@/lib/validations";
import createSupabaseFrontendClient from "@/lib/supabase/createSupabaseFrontendClient";
import { useRouter } from "next/navigation";


const SignupForm = () => {

    const router = useRouter()

    const [pending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
        startTransition(async () => {
            const supabase = await createSupabaseFrontendClient()
            const { data, error } = await supabase.auth.signUp({
                email: user.email,
                password: user.password,
                options: {
                    data: {
                        name: user.name,
                    },
                    emailRedirectTo: `${location.origin}/api/auth/callback`,
                },
            })

            if (error) {
                console.log(error);
                return
            }

            router.push('/auth/email-verification')
        })

    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSignup)}
                className="space-y-4"
            >


                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Name</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} placeholder="Louai Boumediene" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Email</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} placeholder="example@gmail.com" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} placeholder="123456" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full mt-6 gap-x-4">
                    {
                        pending ? "sigin up" : 'sing up with email'
                    }

                </Button>

            </form>
        </Form>

    );
};

export default SignupForm;
