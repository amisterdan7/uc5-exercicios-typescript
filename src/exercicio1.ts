export interface Categoria {
    id: number;
    name: string;
}

export interface Produto {
    id: number;
    name: string;
    price: number;
    quantity: number;
    idCategoria: number;
};

export const produtos: Produto[] = [
  { id: 1, name: "Teclado Mecânico", price: 250.0, quantity: 10, idCategoria: 1 },
  { id: 2, name: "Mouse Gamer", price: 120.0, quantity: 15, idCategoria: 1 },
  { id: 3, name: "Monitor 24 Polegadas", price: 850.0, quantity: 5, idCategoria: 2 },
];

