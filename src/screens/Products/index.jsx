import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Dropdown from "../../components/Dropdown";
import { useSearch } from "../../context/SearchContext";
import { debounce } from "../../utils/debounce";

const URL = "https://dummyjson.com/products";

const Products = () => {
  const { searchValue, setSearchValue } = useSearch();
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchProductData = useCallback(
    async (currentPage = 1, search = "", category = "") => {
      setLoading(true);
      const query = `?skip=${(currentPage - 1) * 10}&limit=10`;
      let endpoint = `${URL}${query}`;
      if (search) {
        endpoint = `${URL}/search${query}&q=${encodeURIComponent(search)}`;
      } else if (category) {
        endpoint = `${URL}/category/${encodeURIComponent(category)}${query}`;
      }
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProductData(data.products);
        setTotalPages(Math.ceil(data.total / 10));
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchProductData(1);
  }, [fetchProductData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetchProductData = useCallback(
    debounce((search) => {
      setSelectedCategory(null);
      setCurrentPage(1);
      fetchProductData(1, search, "");
    }, 500),
    [fetchProductData]
  );

  useEffect(() => {
    if (searchValue !== "") debouncedFetchProductData(searchValue);
  }, [searchValue, debouncedFetchProductData]);

  const getCategoryData = useCallback(async () => {
    try {
      const response = await fetch(`${URL}/categories`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategoryOptions(
        data.map((list) => {
          return { label: list, value: list };
        })
      );
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
  }, []);

  useEffect(() => {
    getCategoryData();
  }, [getCategoryData]);

  useEffect(() => {
    debounce((value) => {
      fetchProductData(1, searchValue);
    }, 300);
  }, [fetchProductData, searchValue]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProductData(page, searchValue, selectedCategory?.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setCurrentPage(1);
    setSearchValue("");
    fetchProductData(1, "", selectedOption?.value);
  };

  return (
    <div>
      <Dropdown
        className="w-[346px] my-3"
        options={categoryOptions}
        defaultValue={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Select Category"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {totalPages > 1 ? (
            <div className="flex justify-end my-2">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Products;
