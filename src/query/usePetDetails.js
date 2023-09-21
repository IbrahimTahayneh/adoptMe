import { withApiQuery } from "./withApiQuery";
import { httpUtil } from "../utils";

export const usePetDetails = withApiQuery(
  (id) => ["DETAILS", id],
  (id) => async () => {
    const url = `http://pets-v2.dev-apis.com/pets?id=${id}`;
    const result = await httpUtil.getData(url);
    return result;
  }
)();
