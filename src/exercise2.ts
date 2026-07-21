import { products } from "./exercise1";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  idCategory: number;
}

export function searchProductsByText(list: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) {
    return list;
  }

  const normalizedTerm = searchTerm.toLowerCase();

  return list.filter((product) =>
    product.name.toLowerCase().includes(normalizedTerm)
  );
}

console.log("=== EXERCISE 2 ===");
console.log("Search 'mouse':", searchProductsByText(products, "mouse"));
console.log("Empty search:", searchProductsByText(products, ""));