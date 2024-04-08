export interface ProductModel {
    id: number;
    name: string;
    categoryId: number;
    categoryName: string;
    discount: number;
    price: number;
    images: string[];
    description: string | null;
    inStock: boolean;
}
export interface DummyProductModel {
    products: ProductModel[];
}

export interface CategoryModel {
    id: number;
    name: string;
}