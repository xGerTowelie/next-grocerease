'use client'

import { signInWithKeycloak } from "@/lib/auth-helpers/client"
import { Button } from "@/components/ui/button"

export default function LoginButton() {
    return (
        <Button onClick={signInWithKeycloak}>Log in with Keycloak</Button>
    )
}
