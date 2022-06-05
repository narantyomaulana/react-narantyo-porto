import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">This is My Project </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro voluptatibus deleniti consequuntur, ad esse illum minima, sequi, nihil animi quia. Id eius veritatis iusto adipisci doloremque officiis in harum?
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
