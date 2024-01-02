//classic way!

// fetch("https://swapi.dev/api/people/")
//   .then((data) => {
//     console.log("success! bringing json...");
//     data.json().then((data) => {
//       const results = data.results;
//       results.forEach((item) => {
//         const container = document.getElementById("todo-container");
//         container.innerHTML += `<div>
//                                     <h2>name: ${item.name}</h2>
//                                     <h3>Eye Color: ${item.eye_color} </h3>
//                                     <h3>Height: ${item.height}</h3>
//                                 </div>`;
//       });
//     });
//   })
//   .catch((error) => {
//     console.log("error! something is not right");
//   });

//modern way!

async function getStarwarsPeople() {
  const response = await fetch("https://swapi.dev/api/people/");
  const json = await response.json();
  const resultsArray = json.results;
  const container = document.getElementById("todo-container");
  resultsArray.forEach((item) => {
    container.innerHTML += `<div>
                            <h2>name: ${item.name}</h2>
                            <h3>Eye Color: ${item.eye_color} </h3>
                            <h3>Height: ${item.height}</h3>
                            </div>`;
  });
}

getStarwarsPeople();
