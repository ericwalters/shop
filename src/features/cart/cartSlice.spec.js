import cartReducer, { add, remove } from "./cartSlice";
import { ProductModel } from "../../models/product-model";

describe("cart reducer", () => {
  const initialState = {
    quantity: 0,
    cartItems: [],
  };
  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual({
      quantity: 0,
      cartItems: [],
    });
  });

  describe("add", () => {
    it("should update quantity when item is added to the cart", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, add(new ProductModel({ id: "chair" })));
      expect(second.quantity).toEqual(2);
    });
  });

  describe("remove", () => {
    it("should update quantity when item is removed from the cart", () => {
      const first = cartReducer(
        initialState,
        add(new ProductModel({ id: "chair-0" }))
      );
      const second = cartReducer(first, remove({ id: "chair-0" }));
      expect(second.quantity).toEqual(0);
    });

    it("should only remove items with matching id", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, add(new ProductModel({ id: "cup-0" })));
      const third = cartReducer(second, remove({ id: "chair-0" }));
      expect(third.quantity).toEqual(2);
    });

    it("should prevent a negative cart quantity", () => {
      const first = cartReducer(initialState, add(ProductModel.defaults()));
      const second = cartReducer(first, remove({ id: "chair-0" }));
      const third = cartReducer(second, remove({ id: "chair-3" }));
      expect(third.quantity).toEqual(1);
    });
  });
});
