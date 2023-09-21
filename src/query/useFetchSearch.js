// import { withApiQuery } from "./withApiQuery";
// import { httpUtil } from "../utils";

// export const useFetchSearch = withApiQuery(
//   (data) => ["SEARCH", data],
//   ({ animal, location, breed }) =>
//     async () => {
//       const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;
//       const result = await httpUtil.getData(url);
//       return result;
//     }
// )();

import { withApiQuery } from "./withApiQuery";
import { httpUtil } from "../utils";

const PET_API_URL = "https://api.petfinder.com/v2/animals";
const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0RlVnS1dyZXkxekpVUXZSODdUS2V5N1M0M2FrdVU2SXFFMFBFQTZ4alA5bE5nOEc4ZyIsImp0aSI6ImE0OGY0YTM0ZDZiNzZlOTEyMDg5NDU4YTAxODFlM2ZiYmY0ODUwNmI5YTE4Y2Q4M2VkMzJjMDAwMmI4ZWZhMDVjYzdmN2YyMDRlZmM1ZjAzIiwiaWF0IjoxNjc5NDA4OTIzLCJuYmYiOjE2Nzk0MDg5MjMsImV4cCI6MTY3OTQxMjUyMywic3ViIjoiIiwic2NvcGVzIjpbXX0.Abwe2D2R4ECK6qxbB_1te7W0pTD3dndKm-v0KWIKJ_6oBbjmR-JM5DyZVMP5dP84zWKTJ-aSaiHEtIHy53a8YUvA5y_Q4RAtEghzCu5nXyD3kA6jjp28TTR6AfkSvcw6mITQJNoxupfAv3mc1YHXoz0RHYYAyU3B2ku3ZV21eN6whwgg2ggmhKKqS2v_JjEzJORWTPYu-vDA9TMQz9wyKhiE0429QngGMQJdPp7wF7CfuNbyBv3olcthRrYpxqTt4-eLjIEDW_8KktXeHcc6opO73EuYuJJ3pm5gNXheZtYhsnJ47cQET5dVdBUkIt5DkxZq2x4_PCzsfT3pKg-Edg";
const config = {
  headers: {
    Authorization: `Bearer ${access_token} `,
  },
};

export const useFetchSearch = withApiQuery(
  (data) => ["SEARCH", data],
  ({ animal }) =>
    async () => {
      const url = `${PET_API_URL}?type=${animal}`;
      const result = await httpUtil.getData(url, config);
      return result.animals;
    }
)();
