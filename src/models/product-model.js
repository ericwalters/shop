export class ProductModel {
  constructor(product) {
    this.id = product.id;
    this.price = product.price || 0;
    this.description = product.description || "";
    this.label = product.label || "";
  }

  static defaults() {
    return {
      id: "",
      price: 0,
      description: "",
      label: "",
    };
  }
}
