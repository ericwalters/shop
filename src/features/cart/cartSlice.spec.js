import cartReducer, { add, remove } from "./cartSlice";
import { ProductModel } from "../../models/product-model";
//todo: productAdapter use needs to mimic how it's used in the app - new ProductAdapter(new ProductModel(props))
describe("cart reducer", () => {
  const initialState = {
    cartItems: [],
  };
  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      cartItems: [],
    });
  });

  describe("add", () => {
    it("should update quantity when item is added to the cart", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, add(new ProductModel({ id: "chair" })));
      expect(second.cartItems.length).toEqual(2);
    });
    it("should not allow duplicate item objects in cart", () => {
      const first = cartReducer(
        initialState,
        add(new ProductModel({ id: "chair" }))
      );
      const second = cartReducer(first, add(new ProductModel({ id: "chair" })));
      expect(second.cartItems.length).toEqual(1);
    });
  });

  describe("remove", () => {
    it("should update quantity when item is removed from the cart", () => {
      const first = cartReducer(initialState, add({ id: "chair-0" }));
      const second = cartReducer(first, remove("chair-0"));
      expect(second.cartItems.length).toEqual(0);
    });

    it("should only remove items with matching id", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, add(new ProductModel({ id: "cup-0" })));
      const third = cartReducer(second, remove("chair-0"));
      expect(third.cartItems.length).toEqual(2);
    });

    it("should prevent a negative cart quantity", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, remove("chair-0"));
      const third = cartReducer(second, remove("chair-0"));
      expect(third.cartItems.length).toEqual(1);
    });
  });
});
