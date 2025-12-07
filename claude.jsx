export function ChefClaude(){
    return(
        <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>
            Based on the ingredients you have available, I would recommend the
            delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
        </p>

        <h3>Beef Bolognese Pasta</h3>

        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>

        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
                In a large skillet or Dutch oven, cook the ground beef over medium-high heat,
                breaking it up with a wooden spoon, until browned and cooked through,
                about 5–7 minutes.
            </li>
            <li>
                Add the diced onion and minced garlic to the skillet and cook for
                2–3 minutes, until the onion is softened and fragrant.
            </li>
            <li>
                Stir in the tomato paste and cook for 1 minute, then add the crushed
                tomatoes and beef broth.
            </li>
            <li>
                Season with oregano, basil, salt, and pepper. Reduce heat and let the sauce
                simmer for 15–20 minutes.
            </li>
            <li>
                Meanwhile, cook the pasta according to package directions. Drain and
                combine with the sauce.
            </li>
            <li>Serve hot, topped with grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
    )
}



// export function ChefClaude({ recipe, loading }) {
//     if (loading) {
//         return <p>Chef Claude is cooking up your recipe... 👨‍🍳🔥</p>
//     }

//     return (
//         <div>
//             <h2>Chef Claude Recommends:</h2>
//             <p>{recipe}</p>
//         </div>
//     )
// }
