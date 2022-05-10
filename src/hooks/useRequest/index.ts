import axios from "axios";
import { useState, useEffect } from "react";

function useRequest<T>(url?: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (!url) {
      setData(undefined);
      return;
    }
    const loadData = async () => {
      setIsLoading(true);
      axios
        .get<T>(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    loadData();
  }, [url]);

  return [data, isLoading, error] as const;
}

export default useRequest;
