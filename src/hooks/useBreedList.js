import { useGetBreedList } from "../query";

export const useBreedList = (animal) => {
  const results = useGetBreedList(animal, {
    onError: (error) => {
      console.log("Error occurred while fetching data :", error);
    },
    onSuccess: () => {
      console.log("Successfully fetched data:");
    },
  });

  return [results?.data?.breeds ?? [], results.status];
};
