import { products } from "./exercise1";

interface Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    idCategory: number;
}

export function fetchProductFromDatabase(id: number, list: Product[]): Promise<Product>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = list.find((p) => p.id === id);

            if (product){
                resolve(product)
            }
            else{
                reject(`Product with ID ${id} not found in the database.`)
            }
        }, 2000);
    });
}

async function testFetchProduct() {
    console.log("\n\n === EXERCISE 4 ===");

    try {
        const found = await fetchProductFromDatabase(2, products);
        console.log("Product found:", found);
    } catch (error) {
        console.error("Error:", error);
    }

    try {
        const notFound = await fetchProductFromDatabase(99, products);
        console.log("Product found:", notFound);
    } catch (error) {
        console.error("\nError:", error);
    }
}

testFetchProduct();