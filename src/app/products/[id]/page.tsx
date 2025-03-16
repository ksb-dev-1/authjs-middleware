import Container from "@/components/Container";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Container>
      <h1 className="font-bold text-xl mb-4">Details</h1>
      <p>Product {id}</p>
    </Container>
  );
}
