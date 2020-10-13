import { useState, useEffect } from "react";

import useAccessToken from "./useAccessToken";
import useRefreshToken from "./useRefreshToken";
import validateAccessToken from "../helperFunctions/validateAccessToken";
import fetchAccessToken from "../helperFunctions/fetchAccessToken";

export default function useFetch(method = "GET", url, body) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const [err, setErr] = useState("");
  const [accessToken, setAccessToken] = useAccessToken();
  const [refreshToken] = useRefreshToken();

  useEffect(() => {
    const validations = async () => {
      const isValid = await validateAccessToken(accessToken);
      if (isValid) return;
      const newAccessToken = await fetchAccessToken(refreshToken);
      setAccessToken(newAccessToken);
    };

    const fetchItems = async () => {
      let options = {
        method: method,
        headers: {
          authorization: `bearer ${accessToken}`,
          "content-type": "application/json",
        },
      };
      if (body) {
        options = { ...options, body: JSON.stringify(body) };
      }
      const request = await fetch(url, options);
      if(!request.ok){
        setErr(request.statusText)
        setLoading(false)
        return;
      }
      const result = await request.json();

      setResult(result);
      setLoading(false);
    };

    setLoading(true);
    validations()
      .then(() => {
        fetchItems();
      })
      .catch((err) => {
        setErr(err);
        setLoading(false);
      });
  }, [url, body]);

  return { loading, result, err };
}
