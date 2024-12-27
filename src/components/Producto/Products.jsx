import React, { useState } from "react";
import { PRODUCTS } from "../../data/product.js"; // Asegúrate de que la ruta sea correcta
import ProductCard from "../Producto/ProductCard.jsx";

const ProductList = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  // Función para filtrar productos
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = filter === "all" || product.categoria === filter;
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Lista de Productos
      </h1>

      {/* Controles de filtro */}
      <section className="flex justify-center flex-col min-[770px]:flex-row gap-4 mb-16">
        <section className="flex flex-col  items-center md:items-center gap-2">
          <label htmlFor="filter" className="font-medium">
            Filtrar por categoría:{" "}
          </label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          >
            <option value="all">Todas</option>
            <option value="IPHONE 8">IPHONE 8</option>
            <option value="IPHONE X">IPHONE X</option>
            <option value="IPHONE 11">IPHONE 11</option>
            <option value="IPHONE 12">IPHONE 12</option>
            <option value="IPHONE 13">IPHONE 13</option>
            <option value="IPHONE 14">IPHONE 14</option>
            <option value="IPHONE 15">IPHONE 15</option>
            <option value="IPHONE 16">IPHONE 16</option>
          </select>
        </section>

        <section className="flex flex-col items-center md:items-center gap-2">
          <label htmlFor="search" className="font-medium">
            Buscar:{" "}
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            placeholder="Nombre del producto"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </section>

        <section className="flex flex-col items-center md:items-center gap-2">
          <label htmlFor="minPrice" className="font-medium">
            Precio mínimo:{" "}
          </label>
          <input
            type="number"
            id="minPrice"
            min="0"
            value={minPrice === 0 ? "" : minPrice}
            placeholder="0"
            onChange={(e) =>
              setMinPrice(e.target.value === "" ? 0 : Number(e.target.value))
            }
            className="border border-gray-300 p-2 rounded w-24"
          />
        </section>

        <section className="flex flex-col  items-center md:items-center gap-2">
          <label htmlFor="maxPrice" className="font-medium">
            Precio máximo:{" "}
          </label>
          <input
            type="number"
            id="maxPrice"
            min="0"
            value={maxPrice === Infinity ? "" : maxPrice}
            placeholder="Sin límite"
            onChange={(e) =>
              setMaxPrice(
                e.target.value === "" ? Infinity : Number(e.target.value)
              )
            }
            className="border border-gray-300 p-2 rounded w-24"
          />
        </section>
      </section>

      {/* Galería de productos usando Flexbox */}
      <section className="flex flex-wrap justify-center gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <section
              className="flex justify-center w-full sm:w-1/2 md:w-1/3 lg:w-[30%] "
              key={product.id}
             data-aos="fade-up" data-aos-delay="200"
            >
              <ProductCard product={product} />
            </section>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </section>
    </section>
  );
};

export default ProductList;
