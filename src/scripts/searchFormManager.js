
/* Building a function that appends the search box to the HTML through string interpolation */

const buildAndAppendSearchForm = () => {
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `
  // console.log(searchForm)


/* calling the function defined above and placing the new HTML into the empty div on index.html with the class ="container" */

  const containerDiv = document.querySelector("#container")
  containerDiv.innerHTML = searchForm
}
