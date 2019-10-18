
/* defining a variable containing the bas UR: of the API for ease of use later */

const apiBaseUrl = "https://www.food2fork.com/api/"

/* defining a function that will fetch the API through string inerpolation and variables previously created. 
   Next, adding .then that will convert json to JavaScript */

const searchRecipes = searchInput => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
.then(response => response.json())
