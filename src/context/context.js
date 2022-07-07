import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";
export const PetContext = createContext();

const BASEURL ="https://back-node-protectora.vercel.app";

export const PetContextProvider =({ children }) => {

    const [pets, setPets] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {

        const getPets = async () => {
            const petsApi= await axios.get(`${BASEURL}/pets`);

            setPets(petsApi.data.pets)



        };
        getPets();
    
    },[]);

    useEffect(()=> {

        const getBlogs = async () => {
            const blogsApi= await axios.get(`${BASEURL}/blogs`);

            setBlogs(blogsApi.data.blogs)



        };
        getBlogs();
    
    },[]);

    return (
        <PetContext.Provider value={{ pets, blogs }}>
      {children}
       </PetContext.Provider>
    )
    




}


