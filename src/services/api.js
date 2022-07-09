import axios from "axios";

export const APIHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Authorization': {
      toString () {
          return `Bearer ${localStorage.getItem('token')}`
      }
  }
};





export const API = axios.create({
  //baseURL: "http://localhost:8001",
<<<<<<< HEAD
  baseURL: "https://back-node-protectora.vercel.app/",
=======
   baseURL: "https://back-node-protectora.vercel.app/",
>>>>>>> a47df0f21f7e0eaef5670d712d2db56491606733
  headers: APIHeaders,
});
