import { useState, useEffect } from "react";

export default function useProductSearch({
  supplier_id,
  product_name,
  page_no,
  available,
  city_id,
}) {
  const searchParams = new URLSearchParams();
  if (supplier_id) searchParams.append("supplier_id", supplier_id);
  if (product_name) searchParams.append("product_name", product_name);
  if (page_no) searchParams.append("page_no", page_no);
  if (city_id) searchParams.append("city_id", city_id);
  if (available !== null || available !== undefined)
    searchParams.append("available", available);
  const url = `/api/products/search?${searchParams}`;

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState("");
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setProducts([]);
  }, [supplier_id, product_name, available]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        let options = {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        };
        const request = await fetch(url, options);

        if (!request.ok) {
          setErr(request.statusText);
          setLoading(false);
          return;
        }
        const result = await request.json();
        setProducts((oldProducts) => [...new Set([...oldProducts, ...result])]);
        setHasMore(result.length === 10);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    };

    if (!product_name) return;
    fetchItems().catch((err) => {
      setErr(err);
      setLoading(false);
    });
  }, [product_name, supplier_id, page_no, available]);

  return { err, loading, products, hasMore };
}