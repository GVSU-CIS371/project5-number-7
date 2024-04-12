import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  // State
  state: () => ({
    products: [] as ProductDoc[],
  }),
  // Actions
  actions: {
    init() {
      this.products = initProducts;
    },
    filterByCategory(category: string) {
      return this.products.filter((x: ProductDoc) => x.data.category.includes(category));

    },
    filterByRating(minRating: number) {
      return this.products.filter( (p: ProductDoc) => p.data.rating > minRating )
    },
  },
});
