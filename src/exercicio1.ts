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

