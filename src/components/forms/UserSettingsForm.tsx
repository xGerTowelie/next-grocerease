"use client"

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Companies, Countries, EnsureAll, User } from "@/lib/supabase/complex_types";
import { useEffect, useMemo, useState } from "react";
import { EnumSelect } from "../ui/EnumSelect";
import { Button } from "../ui/button";
import clsx from "clsx";
import { updateUser } from "@/actions/auth";
import SaveButton from "../ui/SaveButton";

type UserSettingsFormProps = {
    user: User
}


const companyChoices: EnsureAll<Companies, Record<Companies, string>> = {
    "LIT_BERATUNG_GMBH": "LIT Beratung GmbH",
    "LIT_SOFTWARE_GMBH": "LIT Software GmbH"
};

const countryChoices: EnsureAll<Countries, Record<Countries, string>> = {
    "GERMANY": "Germany",
    "AUSTRIA": "Austria",
    "SWITZERLAND": "Switzerland"
};

export default function UserSettingsForm(props: UserSettingsFormProps) {
    const [user, setUser] = useState<User>(props.user)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        // props.user changes on revalidatePath
        setUser(props.user)
    }, [props.user])

    const handleCompanyChange = (value: Companies) => {
        setUser(prevUser => ({ ...prevUser, company: value }))
    }

    const handleCountryChange = (value: Countries) => {
        setUser(prevUser => ({ ...prevUser, country: value }))
    }

    const hasChanges = useMemo(() => {
        return Object.keys(user).some(key => user[key as keyof User] !== props.user[key as keyof User])
    }, [user, props.user])

    const update = async () => {
        setIsLoading(true)
        await updateUser(user, ["/settings"])
        setIsLoading(false)
    }

    return (
        <div className="space-y-5">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Company</TableCell>
                        <TableCell>
                            <EnumSelect<Companies>
                                value={user.company}
                                onChange={handleCompanyChange}
                                choices={companyChoices}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>
                            <EnumSelect<Countries>
                                value={user.country}
                                onChange={handleCountryChange}
                                choices={countryChoices}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <SaveButton
                text="Update User Settings"
                update={update}
                isLoading={isLoading}
                hasChanges={hasChanges} />
        </div>
    )
}
