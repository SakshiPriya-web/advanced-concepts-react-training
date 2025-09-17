import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        if (data.products && data.products.length) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(products.length / itemsPerPage) &&
      pageNumber !== page
    ) {
      setPage(pageNumber);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="app">
      <h1 className="title">All Products</h1>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
          </div>
        ))}
      </div>

      {products.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            ⬅ Prev
          </button>
          {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, i) => (
            <button
              key={i + 1}
              className={page === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(products.length / itemsPerPage)}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
}
