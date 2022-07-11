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

  baseURL: "http://localhost:8001",
  //baseURL: "https://back-node-protectora.vercel.app/",

  headers: APIHeaders,
});
