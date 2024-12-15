import { getCurrentUser } from "@/actions/auth";
import UserSettingsForm from "@/components/forms/UserSettingsForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";

export default async function SettingsPage() {

    const { data, error } = await getCurrentUser()

    if (!data) {
        notFound()
    }

    if (error) {
        throw error
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>User Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <UserSettingsForm user={data} />
                </CardContent>
            </Card>
        </div>
    )
}

