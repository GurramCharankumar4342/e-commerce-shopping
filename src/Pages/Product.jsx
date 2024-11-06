import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/DescriptionBox/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products, loading } = useContext(ShopContext);
  const { productId } = useParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description product={product} />
      <RelatedProducts product={product} />
    </div>
  );
};

export default Product;
