import { IQQInfo } from "../../types"
import useRequest from "../useRequest"

const useQQInfo = () => {
	const [data, isLoading, error] = useRequest<IQQInfo>("https://api.uomg.com/api/qq.info?qq=774740085")

	return [data, isLoading, error] as const
}

export default useQQInfo