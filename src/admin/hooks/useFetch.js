import { useState, useEffect } from "react";

export default function useFetch(method = "GET", url, body) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      let options = {
        method: method,
        headers: {
          "content-type": "application/json",
        },
      };
      if (body) {
        options = { ...options, body: JSON.stringify(body) };
      }
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

    setLoading(true);
    fetchItems().catch((err) => {
      setErr(err);
      setLoading(false);
    });
  }, [url, body]);

  return { loading, result, err };
}
