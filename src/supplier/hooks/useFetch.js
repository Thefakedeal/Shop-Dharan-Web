import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
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
      setResult(result);
      setLoading(false);
    };

    fetchItems().catch((err) => {
      setErr(err);
      setLoading(false);
    });
  }, [url]);

  return { loading, result, err };
}