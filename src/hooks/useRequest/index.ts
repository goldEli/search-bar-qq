import { useState, useEffect } from "react";

function useRequest<T>(url?: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (!url) {
      setData(undefined);
      return
    }
    const loadData = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
      } catch (e:any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [url]);

  return [data, isLoading, error] as const;
}

export default useRequest;