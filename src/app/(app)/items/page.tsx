import { getItems } from "@/actions/items";
import AddItemForm from "@/components/forms/AddItemForm";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Item } from "@/lib/supabase/complex_types";
import { notFound } from "next/navigation";

export default async function ItemsPage() {
    const { data: items, error } = await getItems()

    if (error) {
        throw error
    }

    if (!items) {
        notFound()
    }

    return (
        <div className="space-y-3">
            <h1>items</h1>
            <AddItemForm />

            <Card>
                <CardContent>
                    <Table>
                        <TableBody>
                            {items.map((item: Item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.order}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
