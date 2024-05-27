export default function ProductDetail({ params }: {
    params: {
        productId: number;
    }
}) {
    return (
        <main>
            <h1>Product Detail {params.productId}</h1>
        </main>
    );
}