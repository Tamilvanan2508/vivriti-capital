import React, { useState, useEffect, useCallback } from "react";
import { useSearch } from "../../context/SearchContext";
import Advertisement from "../../components/Advertisement";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import Dropdown from "../../components/Dropdown";
import NoRecord from "../../components/NoRecord";
import { debounce } from "../../utils/debounce";
import { apiURL } from "../../static";

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
      window.scrollTo(0, 0);
      setLoading(true);
      const query = `?skip=${(currentPage - 1) * 10}&limit=10`;
      let endpoint = `${apiURL}${query}`;
      if (search) {
        endpoint = `${apiURL}/search${query}&q=${encodeURIComponent(search)}`;
      } else if (category) {
        endpoint = `${apiURL}/category/${encodeURIComponent(category)}${query}`;
      }
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProductData(data.products);
        setTotalPages(Math.ceil(data.total / 10));
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
      const response = await fetch(`${apiURL}/categories`);
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
      <div className="flex flex-col-reverse md:flex-col md:items-start items-center">
        <Advertisement className="order-1 md:order-2" />
        <Dropdown
          className="sm:w-[346px] md:w-[400px] lg:w-[500px] md:my-3 mb-3 order-2 md:order-1"
          options={categoryOptions}
          defaultValue={selectedCategory}
          onChange={handleCategoryChange}
          placeholder="Select Category"
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {productData?.length === 0 ? (
            <NoRecord />
          ) : (
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-2">
              {productData?.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
          {totalPages > 1 ? (
            <div className="flex md:justify-end justify-center my-2">
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
