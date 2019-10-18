
/* Function that builds, through string interpolation, the HTML that will be displayed on the DOM once the search is run */

const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`


/* forEach method iterating through the array returned from the API and displaying each element on the DOM, 
   calling the function defined above */

const displayRecipeHtml = allRecipes => {
  let recipeResultsHtml = ""
  allRecipes.forEach(recipe => {
    let recipeHtml = buildRecipeHtml(recipe)
    recipeResultsHtml += recipeHtml
  });


  /* Inputing the html created and populated above into the section on index.html with the class="search-results." 
     The .search-results section was created in the searcFormManager.js file.*/

  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = recipeResultsHtml
}
