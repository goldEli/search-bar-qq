import useRequest from "./index";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

test("useRequest performs GET request", async () => {
  const mock = new MockAdapter(axios);

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useRequest<string>(url)
  );
  let [data, isLoading] = result.current;
  expect(data).toEqual(undefined);
  expect(isLoading).toBeTruthy();

  await waitForNextUpdate();
  [data, isLoading] = result.current;

  expect(data).toEqual(mockData);
  expect(isLoading).toBeFalsy();
});
