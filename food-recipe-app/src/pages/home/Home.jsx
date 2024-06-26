import { useContext } from "react";
import { Context } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

function Home() {
  
  const { recipeList, loading } = useContext(Context);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p
            className="lg:text-4xl text-xl text-center
     text-black font-extrabold"
          >
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
