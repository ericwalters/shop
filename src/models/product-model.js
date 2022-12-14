export class ProductModel {
  // todo: determine if redux can work with this kind of object
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
