export interface ProductModel {
    id: number;
    name: string;
    categoryId: number;
    categoryName: string;
    discount: number;
    price: number;
    imageUrl: string | null;
    description: string | null;
    inStock: boolean;
}

export interface CategoryModel {
    id: number;
    name: string;
}