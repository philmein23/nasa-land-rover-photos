import { useState, useEffect } from "react";

export function useFetch(url) {
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);
  let [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      let response = await fetch(url);
      let result = await response.json();

      if (response.ok) {
        setData(result);
        setLoading(false);
      } else {
        throw new Error(result);
      }
    } catch (reason) {
      setError(reason);
      setLoading(false);
    }
  };

  useEffect(
    () => {
      fetchData();
    },
    [url]
  );

  return {
    data,
    error,
    isLoading
  };
}
