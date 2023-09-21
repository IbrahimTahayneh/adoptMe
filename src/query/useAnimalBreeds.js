import { withApiQuery } from "./withApiQuery";
import { httpUtil, helper } from "../utils";

const PET_API_URL = "https://api.petfinder.com/v2";
const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0RlVnS1dyZXkxekpVUXZSODdUS2V5N1M0M2FrdVU2SXFFMFBFQTZ4alA5bE5nOEc4ZyIsImp0aSI6ImRjMjgxYjg2MWMxZGY2OTRkM2M3ZGI0YjJhZTdiYzI4MDEwMjAyZDNhZWJhYTJlZDJhZjJlYmY2ZGIwOTFiNzc3YjU2Y2RmZGFhZTg5ZjEyIiwiaWF0IjoxNjgwNTM1OTc4LCJuYmYiOjE2ODA1MzU5NzgsImV4cCI6MTY4MDUzOTU3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.zDNbUGdo8AgqSqKtjejKajqCHXbMScZvsGMawSKfxf93eKtE8Pr7EBXULTmA_B4uh2a2YZK_Y7NkdBOt9Fshxp7oZ8VCt2tIezKxvestOEvc3dPcg1SqKU7LK2mH-XFi9JSHUQqj3CZK0z2lUWbvGPCQ1hOghb0i0dLZOf894BgxBrh6SVY0sJUYkUkq9MQMT84ie_qx6PfhQGfkLLMPQdhu-_NyR3_fRBn3bihxup2YGOhUdXwVoULT_RAkzRxLdUDE78hvHAdQVpWSyQPg8yIS90jysupVsuwrH2AtrjTNRQfvvJGC0nj_a2ncRX7djSvtMOuffXoE2Jx6ldRE3Q";
const config = {
  headers: {
    Authorization: `Bearer ${access_token} `,
  },
};

export const useAnimalBreeds = withApiQuery(
  (data) => ["BREEDS", data],
  ({ name }) =>
    async () => {
      console.log("test", name);
      `${PET_API_URL}?type=${animal}
      const url = `https://api.petfinder.com/v2?types=${name}/breeds`;
      const result = await httpUtil.getData(url, config);
      console.log("resault", result);
      return helper.formatBreeds(result);
    }
)();

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// // import { formatBreeds } from '@/helpers';

// const useAnimalBreeds = (filter) => {
//   console.log();
//   const {
//     data: details,
//     error,
//     isError,
//   } = useQuery(["breeds", access_token, filter?.type?.name], async () => {
//     console.log("test", filter);
//     if (access_token && filter && filter.type) {
//       const url = `https://api.petfinder.com/v2/types/${filter}/breeds`;
//       const response = await axios({
//         url,
//         method: "get",
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       });
//       return helper.formatBreeds(response.data.breeds);
//     }
//     return null;
//   });
//   console.log("details", details);
//   return { details, error, isError };
// };

export default useAnimalBreeds;
