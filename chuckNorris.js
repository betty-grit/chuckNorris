const JOKE_CATEGORIES = [];

let randombtn = document.getElementById("randombtn");
let jokeArea = document.getElementById("jokeArea");
let searchinput = document.getElementById("searchinput");
let search = document.getElementById("search");
let categories = document.getElementById("categories");
let categorybutton = document.getElementById("categorybutton");

// renderjoke(joke){
//   //add joke to DOM
// };
const getRandomJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const random_jokes = await res.json();
  jokeArea.innerHTML = random_jokes.value;
};
randombtn.addEventListener("click", getRandomJoke);

//   // fetch joke with search param
function searchJoke(searchString) {
  const searchJoke = fetch(
    `https://api.chucknorris.io/jokes/search?query=${searchinput.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const chuckjoke = data.result;
      //   //loop through results
      chuckjoke.forEach((element) => {
        // console.log(element.value);
        jokeArea.innerHTML += `<p>${element.value}</p>`;
      });
    })
    .catch((err) => console.log("Error", err));
}
// searchJoke();

// };

search.addEventListener("click", (e) => {
  e.preventDefault();
  searchJoke();
});

// fetch joke with category

function getCategories() {
  const selectjoke = fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((data) => {
      //   //append categories to select
      data.forEach((element) => {
        categories.innerHTML += `<option value=${element}>${element}</option>`;
      });
    });
}
//   //fetch categories
getCategories();

function getJokeWithCategory(category) {
  // fetch joke with category
  const jokecategory = fetch(
    `https://api.chucknorris.io/jokes/random?category=${categories.value}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => (jokeArea.innerHTML += `<p>${data.value}</p>`));
}
categorybutton.addEventListener("click", getJokeWithCategory);

// };
