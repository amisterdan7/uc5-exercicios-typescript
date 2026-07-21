interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  idCategory: number;
}

export const products: Product[] = [
  { id: 1, name: "Mechanical Keyboard", price: 250.0, quantity: 10, idCategory: 1 },
  { id: 2, name: "Gaming Mouse", price: 120.0, quantity: 15, idCategory: 1 },
  { id: 3, name: "24-inch Monitor", price: 850.0, quantity: 5, idCategory: 2 },
];

export function calculateTotalStockValue(list: Product[]): number {
  return list.reduce((total, product) => total + product.price * product.quantity, 0);
}

console.log("=== EXERCISE 1 ===");
console.log("Products:", products);
console.log("Total Stock Value: $", calculateTotalStockValue(products));