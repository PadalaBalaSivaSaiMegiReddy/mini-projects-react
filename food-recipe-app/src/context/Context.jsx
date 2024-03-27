import { createContext, useState } from "react";

export const Context =createContext(null);

export default function ContextProvider({children}){

    const [searchParam,setSearchParam]=useState('');
    const [loading,setLoading]=useState(false);
    const [recipeList,setRecipeList]=useState([]);

    const handleSubmit=async (event)=>{
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data=await res.json();
            if(data?.data?.recipes){

                setRecipeList(data);
            }
            setLoading(true);
            setSearchParam('');

        } catch (error) {
            console.log(error)
            setLoading(true);
        }
      }

      console.log(recipeList)

    return <Context.Provider value={{searchParam,setSearchParam,handleSubmit}}>
        {children}
    </Context.Provider>
}