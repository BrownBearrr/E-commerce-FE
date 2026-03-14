import content from "../data/content.json";

export const loadProductById = ({params}) => {
  const productId = params.productId;
  const product = content.products.find(p => p.id == productId);
  return product;
}