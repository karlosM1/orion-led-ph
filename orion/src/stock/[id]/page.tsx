import { ProductDetail } from "@/landing-page/features/components/product-detail";
import { products } from "@/lib/product";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    throw new Error("Product not found");
  }

  return <ProductDetail product={product} />;
}
