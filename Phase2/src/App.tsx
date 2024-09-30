import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FilterButton from "./components/FilterButton";
function App() {
  const products = [
    { name: "Phone", category: "Electronics", price: 1000 },
    { name: "T-shirt", category: "Clothing", price: 50 },
    { name: "Laptop", category: "Electronics", price: 3000 },
    { name: "Jeans", category: "Clothing", price: 70 },
  ];

  const handelClick = (category: string) => {
    setSelectedFilter(category);
  };

  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.category === selectedFilter);

  return (
    <>
      <h1>Product List</h1>
      <div className="filter-buttons">
        <FilterButton
          category="All"
          isSelected={selectedFilter === "All"}
          onClick={handelClick}
        />
        <FilterButton
          category="Electronics"
          isSelected={selectedFilter === "Electronics"}
          onClick={handelClick}
        />
        <FilterButton
          category="Clothing"
          isSelected={selectedFilter === "Clothing"}
          onClick={handelClick}
        />
      </div>
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
