import { useQuery } from "@tanstack/react-query";

/**
 * Creates a higher-order function that returns a custom hook for querying an API using react-query.
 * @param {function} queryKey A function that returns the query key for the API request.
 * @param {function} queryFn A function that returns the API request function.
 * @returns {function} The custom hook for querying the API.
 */

export const withApiQuery = (queryKey, queryFn) => {
  return () => {
    const useCustomQuery = (data, queryOptions = {}) => {
      const finalQueryKey = queryKey(data);
      const finalQueryFn = queryFn(data);

      const mergedOptions = {
        ...queryOptions,
        onError: (error) => {
          console.error(error);
          queryOptions.onError && queryOptions.onError(error);
        },
        onSuccess: (data) => {
          console.log(`Successfully fetched data for ${queryKey}`);
          queryOptions.onSuccess && queryOptions.onSuccess(data);
        },
      };

      return useQuery(finalQueryKey, finalQueryFn, mergedOptions);
    };

    return useCustomQuery;
  };
};
