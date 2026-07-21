import { products } from "./exercise1";
import type { Product } from "./exercise1";;

export function searchProductsByText(list: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) {
    return list;
  }

  const normalizedTerm = searchTerm.toLowerCase();

  return list.filter((product) =>
    product.name.toLowerCase().includes(normalizedTerm)
  );
}

console.log("\n=== EXERCISE 2 ===");
console.log("Search 'mouse':", searchProductsByText(products, "mouse"));
console.log("Empty search:", searchProductsByText(products, ""));