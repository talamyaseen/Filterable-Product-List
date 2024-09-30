interface ProductListProps {
  products: {
    name: string;
    category: string;
    price: number;
  }[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-list">
      {products.length === 0 && <p>No Products</p>}
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
