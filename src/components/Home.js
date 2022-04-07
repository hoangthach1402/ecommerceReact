import React, { useContext, useEffect } from "react";
import { ShopContext } from "../App";
import Product from "./Product";
import Cart from "./Cart";
import Order from "./Order";
const Home = () => {
  const { products, carts, selectedProductId, thanhtoan } =
    useContext(ShopContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="col-6">{carts.length !== 0 && <Cart />}</div>
      </div>
      <div className="bg-info text-white">{thanhtoan && <Order />}</div>
    </div>
  );
};

export default Home;
