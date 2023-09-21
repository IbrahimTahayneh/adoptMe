import axios from "axios";

export const getData = async (url = "", config) => {
  const results = await axios.get(url, config );
  return results.data;
};

export const putData = async (url = "", data = null) => {
  const result = await axios.put(url, data);
  return result?.data;
};

export const postData = async (url = "", data = null) => {
  const result = await axios.post(url, data);
  return result?.data;
};

export const deleteData = async (url = "", data = null) => {
  const result = await axios.delete(url, { data });
  return result?.data;
};
