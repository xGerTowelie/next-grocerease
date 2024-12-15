type RecepiePageProps = {
    params: Promise<{ id: string }>
}
export default async function RecepiePage(props: RecepiePageProps) {
    console.log(props)
    const id = (await props.params).id
    return (
        <h1>{id}</h1>
    )
} 
