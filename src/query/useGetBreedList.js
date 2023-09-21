import { withApiQuery } from "./withApiQuery";
import { httpUtil } from "../utils";

export const useGetBreedList = withApiQuery(
  (animal) => ["BREED_LIST", animal],
  (animal) => async () => {
    const url = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
    const result = await httpUtil.getData(url);
    return result;
  }
)();
