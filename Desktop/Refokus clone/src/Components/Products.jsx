import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores Arquitectura y diseño de interiores",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="mt-32">
        {products.map((val, index)=> <Product val={val} />)}
    </div>
  );
}

export default Products;
