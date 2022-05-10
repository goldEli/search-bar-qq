import { IQQInfo } from "../../types";
import useRequest from "../useRequest";

const useQQInfo = (qq?: string) => {
  const [data, isLoading, error] = useRequest<IQQInfo>(
    qq ? `https://api.uomg.com/api/qq.info?qq=${qq}` : undefined
  );

  return [data, isLoading, error] as const;
};

export default useQQInfo;
