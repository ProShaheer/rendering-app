import { Suspense } from "react"

import { Product } from "@/components/product"
import { Reviews } from "@/components/reviews"

export default function ProductReviews() {
    return (
        <div>
            <h1>Product reviews</h1>
            <Suspense fallback={<p>Loading Product Details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Lodaing Reveiws...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}