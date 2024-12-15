import LoginButton from "@/components/ui/LoginButton";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {

    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data.user) {
        redirect('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <h1 className="text-3xl font-bold mb-6">Welcome to our Spesen App</h1>
            <p className="text-xl mb-8">Please log in to continue</p>
            <LoginButton />
        </div>
    )
}
