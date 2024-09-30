import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
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
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  useState;
  return (
    <>
      <h1>Product List</h1>
      <div className="filter-buttons">
        <button
          className={selectedFilter === "All" ? "active" : ""}
          onClick={() => handelClick("All")}
        >
          All
        </button>
        <button
          className={selectedFilter === "Electronics" ? "active" : ""}
          onClick={() => handelClick("Electronics")}
        >
          Electronics
        </button>
        <button
          className={selectedFilter === "Clothing" ? "active" : ""}
          onClick={() => handelClick("Clothing")}
        >
          Clothing
        </button>
      </div>
      <ProductList products={[]} />
    </>
  );
}

export default App;
