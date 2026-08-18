import { useState } from "react";
import useFetch from "./useFetch.jsx";
import Button from "./Button.jsx";

function ProductList() {

 const { data: products, loading, error } = useFetch(
  "https://fakestoreapi.com/products"
);


  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);


if (loading) {
  return <h2>Loading products...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}


  return (
    <div>
     
     <div className="filters">
        {categories.map((item) => (
          <Button
            key={item}
            variant={category === item ? "primary" : "secondary"}
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>

     
      <div className="products">
        {filteredProducts.map((product) => (
        <div className="product" key={product.id}>
            <img src={product.image} width="120" alt={product.title} />

            <h3>{product.title}</h3>

            <p>₹{Math.floor(product.price * 95.82)}</p>

            <p>{product.category}</p>

           
            <Button variant="primary">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;