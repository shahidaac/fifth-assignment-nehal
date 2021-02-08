//key to search
document.getElementById("search").addEventListener("click", function () {
  const searchKeyword = document.getElementById("searchTerm").value;
  //key search as meal :name api
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyword}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("dishItem").innerHTML = "";
      document.getElementById("mealIngredients").innerHTML = "";
      const dishItem = document.getElementById("dishItem");
      data.meals.forEach((item) => {
        const dishInfo = document.createElement("div");
        dishInfo.innerHTML = `
            <img src="${item.strMealThumb}"  onClick="itemOnClick(${item.idMeal})">
            <h2 onClick="itemOnClick(${item.idMeal})" >${item.strMeal}</h2>
            `;
        dishInfo.className = "card w-25";
        dishItem.appendChild(dishInfo);
      });
    })

    //error handling
    .catch((error) => {
      document.getElementById("dishItem").innerHTML = "";
      document.getElementById("mealIngredients").innerHTML = "";
      const dishItem = document.getElementById("dishItem");
      const checkError = document.createElement("h2");
      checkError.innerHTML = `Either invalid input or this dish is not available now! You may try other dishes.Thank you.`;
      dishItem.appendChild(checkError);
    });
});

//meal click ingredients showing
let itemOnClick = (dishNo) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dishNo}`)
    .then((res) => res.json())
    .then((data) => {
      let dishSpec = document.getElementById("mealIngredients");
      document.getElementById("mealIngredients").innerHTML = "";
      document.getElementById("mealIngredients").style.display = "block";
      let dishIngredient = document.createElement("div");
      dishIngredient.innerHTML = `
            <img src="${data.meals[0].strMealThumb} ">
            <h2>${data.meals[0].strMeal}</h2>
            <br>
            <h4>Ingredients</h4>
            <div class="form-check">
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                     <p> ${data.meals[0].strIngredient1}</p>
                 </label>
            </div>
             <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                      <p> ${data.meals[0].strIngredient2}</p>
                 </label>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                     <p> ${data.meals[0].strIngredient3}</p>
                 </label>
            </div>
             <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                    <p> ${data.meals[0].strIngredient4}</p>
                 </label>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                    <p> ${data.meals[0].strIngredient5}</p>
                 </label>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                    <p> ${data.meals[0].strIngredient6}</p>
                 </label>
            </div>
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                 <label class="form-check-label" for="flexCheckChecked">
                    <p> ${data.meals[0].strIngredient7}</p>
                 </label>
            </div>
            `;
      dishIngredient.className = "mealMenu";
      dishSpec.appendChild(dishIngredient);
    });
};
