
import '/Users/samueladegbola/Desktop/All-react course/intaractive/.env'; 






import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients from a user and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient mentioned. The recipe can include additional ingredients, but try not to include too many extra ingredients. 
Format your response in markdown so it can be rendered on a web page.
`;

const hf = new HfInference(import.meta.env.VITE_HF_TOKEN);


export async function getRecipeFromMistral(ingredientsArr) {
  
  const ingredientsString = ingredientsArr.join(", ");
  
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 300, // increased to allow longer recipes
    });
  

    return response.choices[0].message.content;

  } catch (err) {
    console.error("Error getting recipe:", err.message);
    return "Sorry, something went wrong while fetching the recipe.";
  }
}
