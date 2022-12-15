export class ProductAdapter {
  constructor(productModel) {
    this.productModel = productModel;
  }

  serialize() {
    return {
      id: this.productModel.id,
      price: this.productModel.price,
      description: this.productModel.description,
      label: this.productModel.label,
    };
  }
}
