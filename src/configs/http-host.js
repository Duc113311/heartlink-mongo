import axios from "axios";

export const http_request = axios.create({
  baseURL: `http://localhost:5000/heartlink-dating-project/us-central1/app/`,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwN2wzb2NKNVVVUnVsU1JqUWx1VlpPMkU1UWVqTiIsImlhdCI6MTY3ODM0ODA1NywiZXhwIjoxNjgwOTQwMDU3fQ.rArUxofjCjI2s2uQUA2uoDLOnEDbQh4iE2FkRlWtt1I`,
  },
  withCredentials: false,
});
