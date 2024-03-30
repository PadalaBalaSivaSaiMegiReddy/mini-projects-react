import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";

function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useContext(Context);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) setRecipeDetailsData(data.data);
    }
    getRecipeDetails();
  }, [id]);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto ">
        <div className="h-96 overflow-hidden rounded-xl group">
          
        </div>
      </div>
    </div>
  );
}

export default Details;
