document.addEventListener('DOMContentLoaded', () => {
  //     SET TIMER      //
  const timer = document.querySelector('#timer');
  let timeLeft = 600;

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    } else {
      timeLeft--;
    }
  }, 1000);

  //    CALL BUTTON SHOW RESULTS    //
  const callBtn = document.querySelector('.result__call-btn');
  const resultAnswer = document.querySelector('.result__answer');

  async function fetchFilms(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.title;
  }

  async function fetchVehiclesName(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
  }

  async function fetchVehiclesModel(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.model;
  }
  async function fetchStarshipsName(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
  }

  async function fetchStarshipsModel(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.model;
  }

  callBtn.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/1/')
      .then((response) => response.json())
      .then((data) => {
        resultAnswer.innerHTML += `
        <h2>${data.name}</h2>
        <p>Birth year: ${data.birth_year}</p>
        <p>Eye color: ${data.eye_color}</p>
        <p>Gender: ${data.gender}</p>
        <p>Hair color: ${data.hair_color}</p>
        <p>Height: ${data.height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Skin color: ${data.skin_color}</p>
        `;
      });

    fetch('https://swapi.dev/api/people/1/')
      .then((response) => response.json())
      .then((data) => {
        const originalDateCreated = data.created;
        const originalDateEdited = data.edited;
        const dateObjCreated = new Date(originalDateCreated);
        const dateObjEdited = new Date(originalDateEdited);

        const dayCreated = String(dateObjCreated.getDate()).padStart(2, '0');
        const dayEdited = String(dateObjEdited.getDate()).padStart(2, '0');

        const monthCreated = String(dateObjCreated.getMonth() + 1).padStart(
          2,
          '0',
        );
        const monthEdited = String(dateObjEdited.getMonth() + 1).padStart(
          2,
          '0',
        );

        const yearCreated = dateObjCreated.getFullYear();
        const yearEdited = dateObjEdited.getFullYear();

        const formattedDateCreated = `${dayCreated}.${monthCreated}.${yearCreated}`;
        const formattedDateEdited = `${dayEdited}.${monthEdited}.${yearEdited}`;

        resultAnswer.innerHTML += `
        <p>Created: ${formattedDateCreated}</p>
        <p>Edited: ${formattedDateEdited}</p>
        `;
      });
    // Display titles of films //

    let filmsArray = [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ];

    async function displayFilmsTitles() {
      let i = 1;
      for (let filmUrl of filmsArray) {
        const filmTitle = await fetchFilms(filmUrl);
        resultAnswer.innerHTML += `<p>Film ${i}: ${filmTitle}</p>`;
        i++;
      }
    }

    //    Display planet name   //

    fetch('https://swapi.dev/api/planets/1/')
      .then((response) => response.json())
      .then((data) => {
        resultAnswer.innerHTML += `
        <p>Homeworld: ${data.name}</p>
        `;
      });

    //   Display vehicles   //

    let vehiclesArray = [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ];

    async function displayVehicles() {
      let i = 1;
      for (let vehicleUrl of vehiclesArray) {
        const vehicleName = await fetchVehiclesName(vehicleUrl);
        const vehicleModel = await fetchVehiclesModel(vehicleUrl);
        resultAnswer.innerHTML += `
            <p>Vehicle ${i} name: ${vehicleName} </p>
            <p>Vehicle model ${i}: ${vehicleModel}</p>
            `;
        i++;
      }
    }

    //   Display starhips       //

    let starshipsArray = [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ];

    async function displayStarships() {
      let i = 1;
      for (let starshipUrl of starshipsArray) {
        const starhipName = await fetchStarshipsName(starshipUrl);
        const starhipModel = await fetchStarshipsModel(starshipUrl);
        resultAnswer.innerHTML += `
              <p>Starship ${i} name: ${starhipName} </p>
              <p>Starship model ${i}: ${starhipModel}</p>
              `;
        i++;
      }
    }
    displayFilmsTitles();
    displayVehicles();
    displayStarships();
  });
});
