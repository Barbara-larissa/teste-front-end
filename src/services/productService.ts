
import type { Product } from '../types/Product';

interface ProductsResponse {
  success: boolean;
  products: Product[];
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('/api/produtos');

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta invalida da API de produtos.');
  }

  return data.products;
}

