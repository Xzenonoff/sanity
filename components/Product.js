import React from "react";
import Link from "next/link";
import { urlFor } from "../Lib/client";

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  return (
    <Link href={`/product/${slug.current}`}>
      <a>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={400}
            height={400}
            className="product-image"
            alt="icon"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </a>
    </Link>
  );
};

export default Product;
