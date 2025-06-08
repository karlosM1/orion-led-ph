import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "@/landing-page/features/components/product-detail";
import { products } from "@/lib/product";

export const Route = createFileRoute("/stock/$productId")({
  component: ProductDetailPage,
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return { product };
  },
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} />;
}
