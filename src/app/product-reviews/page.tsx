import { Suspense } from "react";

import Products from "@/src/components/products";
import Reviews from "@/src/components/reviews";

export default function ProductReviews(){
    return(
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<p>Loading Products...</p>}>
                <Products />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    )
}