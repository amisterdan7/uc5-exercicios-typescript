
export interface ProductRegistration {
    name: string;
    price: number;
    quantity: number;
    idCategory: number;
}

interface ProductErrors{
    name?: string;
    price?: string;
    quantity?: string;
}

interface ValidationResult {
    valid: boolean;
    errors: ProductErrors
}

export function validateProductRegistration(data: ProductRegistration): ValidationResult {
  const errors: ProductErrors = {};

  if (!data.name || data.name.trim().length < 3 ) {
    errors.name = "Name must have at least 3 characters."; 
  }

  if (data.price <= 0) {
    errors.price = "Price must be greater than zero.";
  }

  if (data.quantity < 0){
    errors.quantity = "Quantity cannot be negative."
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

console.log("*-* EXERCISE 3 *-*")
console.log("Valid product:", validateProductRegistration({
  name: "Wireless Headset",
  price: 199.9,
  quantity: 8,
  idCategory: 1,
}));


// Testando as regras
console.log("\nInvalid product:", validateProductRegistration({
  name: "TV",
  price: -10,
  quantity: -2,
  idCategory: 2,
}));