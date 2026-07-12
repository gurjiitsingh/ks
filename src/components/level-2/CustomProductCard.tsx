"use client";

import { useEffect, useMemo } from "react";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import { ProductType } from "@/lib/types/productType";
import { addOnType } from "@/lib/types/addOnType";
import { cartProductType } from "@/lib/types/cartDataType";
import { formatCurrencyNumber } from "@/utils/formatCurrency";
import CartButtonAdd from "../AddToCart/CartButtonAdd";
import Image from "next/image";
import { useState } from "react";
import type { TnewModifierItemSchema } from "@/lib/types/modifierItemType";
import { IoClose } from "react-icons/io5";
import CartButtonAddRed from "../AddToCart/CartButtonAddRed";
 
export default function ProductCardHorizontical({
  product,
  variants,
  allAddOns,
  modifierGroups,
  productModifiers,
}: {
  product: ProductType;
  variants: ProductType[];
  allAddOns: addOnType[];
  modifierGroups: any[];
  productModifiers: any[];

}) {

  type ModifierItem = TnewModifierItemSchema & {
    id: string;
  };
  const { settings } = UseSiteContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductType | null>(null);

  const [selectedModifiers, setSelectedModifiers] = useState<{
    [groupId: string]: any[];
  }>({});



  const shouldOpenPopup =
    product.hasVariants || product.hasModifier;




  const [simpleNoteOpen, setSimpleNoteOpen] = useState(false);


  const [popupNote, setPopupNote] = useState("");
  const [quickNote, setQuickNote] = useState("");

  //  FILTER VARIANTS FOR THIS PRODUCT
  const productVariants = useMemo(() => {
    if (!product.hasVariants) return [];
    return variants
      .filter((v) => v.parentId === product.id)
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  }, [product.id, product.hasVariants, variants]);
  const [modifiersLoaded, setModifiersLoaded] = useState(false);

  const productGroupIds = useMemo(() => {
    return productModifiers
      .filter((pm) => pm.productId === product.id)
      .map((pm) => pm.groupId);
  }, [product.id, productModifiers]);

  const productModifierGroups = useMemo(() => {
    return modifierGroups.filter((g) =>
      productGroupIds.includes(g.group.id)
    );
  }, [modifierGroups, productGroupIds]);

  useEffect(() => {
    if (!productModifierGroups.length) return;

    console.log("🍕 Product:", product.name);
    console.log("🔥 FULL GROUPS:", productModifierGroups);
  }, [productModifierGroups]);



  useEffect(() => {
    if (isOpen) {
      setSelectedModifiers({});
      setPopupNote(""); // ✅ reset properly

      if (productVariants.length > 0) {
        setSelectedVariant(productVariants[0]);
      }
    }
  }, [isOpen]);

  // ---------------- PRICE ----------------
  const priceRegular = formatCurrencyNumber(
    product.price ?? 0,
    settings.currency as string,
    settings.locale as string
  );

  const priceTarget =
    product.discountPrice && product.discountPrice > 0
      ? product.discountPrice
      : product.price ?? 0;

  const priceDiscounted =
    product.discountPrice && product.discountPrice > 0
      ? formatCurrencyNumber(
        product.discountPrice,
        settings.currency as string,
        settings.locale as string
      )
      : null;

  const cartProduct: cartProductType = {
    id: product.id,
    uniqueKey:
      product.id.toString() +
      "_" +
      (quickNote?.trim() || ""),
    note: quickNote,
    quantity: 1,
    currentStock: product.currentStock!,
    price: priceTarget,
    basePrice: priceTarget,
    name: product.name,
    image: product.image,
    categoryId: product.categoryId,
    productCat: product.productCat!,
    taxRate: product.taxRate,
    taxType: product.taxType,

  };

  const modifiersFlat = Object.values(selectedModifiers).flat();



  const uniqueKey =
    (selectedVariant?.id ?? product.id) +
    "_" +
    modifiersFlat.map((m) => m.id).sort().join("_") +
    "_" +
    (popupNote?.trim() || "");

  useEffect(() => {
    if (isOpen && productVariants.length > 0) {
      setSelectedVariant(productVariants[0]);
    }
  }, [isOpen, productVariants]);

  const selectedProduct = selectedVariant ?? product;

  const modifiersTotal = Object.values(selectedModifiers)
    .flat()
    .reduce((sum, item) => sum + (item.price ?? 0), 0);

  const basePrice = selectedProduct.price ?? 0;

  const finalPrice = basePrice + modifiersTotal;


  const isValidSelection = productModifierGroups.every((groupData) => {
    const selected = selectedModifiers[groupData.group.id] || [];

    return (
      selected.length >= groupData.group.minSelection &&
      selected.length <= groupData.group.maxSelection
    );
  });

  // ---------------- UI ----------------
  return (
    <div className="w-full lg:w-[49%]">
      <div className="group border rounded-[2.5rem] p-8 bg-white border-neutral-200 shadow-sm hover:shadow-xl hover:border-red-600/50 hover:bg-neutral-50 transition-all duration-500 flex flex-col justify-between h-full">

        {/* Product Content */}
        <div className="space-y-5">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-950 leading-tight group-hover:text-red-600 transition-colors">
              {product.name}
            </h3>

            {product.discountPrice && product.discountPrice > 0 && (
              <span className="text-[9px] font-black uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full shrink-0">
                Sale
              </span>
            )}
          </div>

          <button
            onClick={() =>
              alert(product.productDesc ?? "No description available")
            }
            className="text-sm text-neutral-500 leading-relaxed text-left hover:text-neutral-700 transition-colors"
          >
            {product.productDesc}
          </button>
        </div>

        {/* Bottom Price Area */}
        <div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-[1fr_auto] gap-4 items-center">

          <div>
            {product.discountPrice !== undefined &&
              product.discountPrice > 0 ? (
              <div className="flex items-center gap-3">
                <div className="bg-red-600 text-white rounded-2xl px-5 py-3 shadow-md">
                  <span className="block text-[9px] uppercase tracking-widest text-red-200 font-bold">
                    Offer
                  </span>
                  <span className="text-xl font-black">
                    {priceDiscounted}
                  </span>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
                    Regular
                  </span>

                  <span className="text-lg line-through text-neutral-400 font-bold">
                    {priceRegular}
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-neutral-100 border border-neutral-200 rounded-2xl px-5 py-3 inline-block">
                <span className="block text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
                  Price
                </span>

                <span className="text-xl font-black text-neutral-950">
                  {priceRegular}
                </span>
              </div>
            )}
          </div>

         <div>
  {shouldOpenPopup ? (
    <button
      onClick={() => setIsOpen(true)}
      className="bg-red-600 hover:bg-neutral-950 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-2xl transition-all duration-300 shadow-md"
    >
      Customize
    </button>
  ) : (
    <CartButtonAddRed cartProduct={cartProduct} />
  )}
</div>

        </div>
      </div>
    </div>
  );
}
