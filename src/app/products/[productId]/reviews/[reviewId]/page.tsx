import {notFound} from "next/navigation"

export default function ReviewDetail({ params }: {
    params: {
        productId: number;
        reviewId: number;
    }
}) {
    if (params.productId < 0 || params.reviewId < 0) {
        return notFound();
    }
    return (
        <main>
            <h1>Product Detail {params.productId} Review Detail {params.reviewId}</h1>
        </main>
    );
}