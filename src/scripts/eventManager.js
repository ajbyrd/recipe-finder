
/* defining the function that will take the input search and fetch data from the API */

const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  // console.log("user input", inputField.value)

/* calling the function that fetches data from the API. 
   Continuing the .then statement that passes the data into the function that creates the HTML on the DOM.
   Clearing the input field. */

  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}

/* defining a function that adds event listener to the search button, listening for an event of "click."  */

const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
