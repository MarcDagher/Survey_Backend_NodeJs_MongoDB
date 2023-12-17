import axios from "axios";

axios.defaults.baseURL = `http://localhost:8000`;

  const request = async ({ route, method = "GET", body }) => {
  const response = await axios.request({
    url: route,
    method: method,
    data: body,
  });

  return response.data;
};

export default request
// export const requestFetch = async ({ route, method, body }) => {
//   const response = fetch(`https://jsonplaceholder.typicode.com/${route}`, {
//     method: method,
//     body: JSON.stringify(body),
//   });

//   return response;
// };
