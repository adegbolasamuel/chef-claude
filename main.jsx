import { ChefClaude } from "./claude"
import { IngredientsList } from "./ingredientsList"
import { getRecipeFromMistral } from "./ai"
import React from "react"
export  function Main (){ 
     
const [ingredients, setIngredients] = React.useState(["all the main spices","pasta","ground beef"])
const [recipeShown, setRecipeShown] = React.useState(false)


 
async function getRecipe(){
    // setRecipeShown(prevShon => !prevShon)
    const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients)
    setRecipeShown(true)
    console.log(generatedRecipeMarkdown)
}


function addIngredient(formData){
const ingredient = formData.get ("ingredient")
setIngredients(prevIngredient => [...prevIngredient,ingredient]
  
)
console.log(ingredient)
}

// function handleMouseOver(){
//     console.log("I was hovered!")
// }






// * Challenge:
// 1
// Create a boolean state that, for now, will represent whether
// we've gotten a recipe back from the "chef". Default to
// " false
// Can call it 'recipeShown'
// 2.
// Grab the markup in recipeCodemd and paste it below.
// This will
// be a placeholder for the content that will come back from the
// chef once we set up that feature.
// 3
// When the user clicks the "Get a recipe" button, flip the
// *recipeShown" state to true.
// Only display the recipe code content if recipeshown
// is true,



return( 
<main>

<form 
// action={getRecipe}
 action={addIngredient}
className="add-ingredient-form"

>
<input
type="text"
placeholder="e.g. oregano"
aria-label="Add ingredient"
name="ingredient"
// onMouseOver={handleMouseOver}
/>
<button>Add ingredient</button>
</form>
{ ingredients.length > 0 && <IngredientsList 
ingredients={ingredients} 
getRecipe={getRecipe}
 />}


{/* { recipeShown && <ChefClaude recipe={recipe} loading={loading} /> } */}


 

{ recipeShown && <ChefClaude />}




</main>
)}