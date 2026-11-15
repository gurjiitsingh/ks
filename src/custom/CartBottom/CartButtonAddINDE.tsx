
"use client";

import React, { useEffect, useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartContext } from "@/store/CartContext";
import { cartProductType } from "@/lib/types/cartDataType";

const CartButtonAddINDE = ({
  cartProduct,
}: {
  cartProduct: cartProductType;
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { addProductToCart, removeCartProduct, cartData } = useCartContext();

  function addToCartL() {
    addProductToCart(cartProduct);
  }

  function removeFromCartL() {
    removeCartProduct(cartProduct);
  }

  useEffect(() => {
    const cartItem = cartData.find((item: cartProductType) => {
      if (cartProduct?.uniqueKey) {
        return item.uniqueKey === cartProduct.uniqueKey;
      }

      return item.id === cartProduct?.id;
    });

    setQuantity(cartItem?.quantity ?? 0);
  }, [cartData, cartProduct]);

  return (
    <div className="flex w-[110px] justify-end">
      {quantity > 0 ? (
        <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-red-100 bg-red-50 p-1">
          {/* Remove */}
          <button
            type="button"
            onClick={removeFromCartL}
            aria-label="Remove one item"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-600 shadow-sm transition-all hover:bg-red-600 hover:text-white active:scale-95"
          >
            <IoMdRemove size={18} />
          </button>

          {/* Quantity */}
          <span className="min-w-[20px] text-center text-sm font-extrabold text-neutral-900 tabular-nums">
            {quantity}
          </span>

          {/* Add */}
          <button
            type="button"
            onClick={addToCartL}
            aria-label="Add one item"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm transition-all hover:bg-red-700 active:scale-95"
          >
            <IoMdAdd size={18} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={addToCartL}
          className="min-h-9 min-w-[82px] rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-md shadow-red-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-red-500 hover:to-red-600 hover:shadow-lg active:translate-y-0 active:scale-95 touch-manipulation"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default CartButtonAddINDE;
