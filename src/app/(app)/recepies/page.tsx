import { getRecepies } from "@/actions/recepies"
import AddRecepieForm from "@/components/forms/AddRecepieForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Recepie } from "@/lib/supabase/complex_types"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ItemsPage() {
    const { data: recepies, error } = await getRecepies()

    if (error) {
        throw error
    }

    if (!recepies) {
        notFound()
    }

    return (
        <div className="space-y-3">
            <h1>items</h1>
            <AddRecepieForm />

            <Card>
                <CardContent>
                    <Table>
                        <TableBody>
                            {recepies.map((recepie: Recepie) => (
                                <TableRow key={recepie.id}>
                                    <TableCell>{recepie.name}</TableCell>
                                    <TableCell>
                                        <Link href={`/recepies/${recepie.id}`}><ExternalLink /></Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
