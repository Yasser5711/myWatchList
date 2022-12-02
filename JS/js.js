//const cards = document.getElementById("cards");
//const loader = document.querySelector(".loading");

//*GetMovie
const getMovies = async (url, countryselec, x) => {
  var lastUrl = url + `${countryselec}` + page + `${x}`;
  const response = await fetch(lastUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
  // handle 404

  return response;
};

//*getSearch
const getSearch = async (url, x, query) => {
  var lastUrl = url + page + `${x}` + "&query=" + query;
  const response = await fetch(lastUrl)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
  // handle 404

  return response;
};

//console.log(getMovies(API_URL, 2));
//*ShowMovie
// show the quotes
function showMovies(data) {
  data.forEach((movie) => {
    const {
      name /* title*/,
      poster_path,
      vote_average,
      overview,
      id,
      backdrop_path,
    } = movie;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
          <div class="image" >
          <img   src="http://via.placeholder.com/1080x1580" data-src="${
            poster_path
              ? IMG_URL + poster_path
              : "http://via.placeholder.com/1080x1580"
          }" alt="${name}" loading="lazy" >
            
          </div>
          <div class="content">
            <a class="header" onclick="fu(this),waiting_data()" data-target="_blank"data-id="${id}" >${name}</a>
          </div>
          <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="${Math.trunc(
        vote_average / 2
      )}" data-max-rating="5"></div>
    </div>
       `;
    $(".ui.rating").rating("disable");
    //document.getElementById("demo1").appendChild(card);
    cards.appendChild(card);
  });
}

//*Loader
const hideLoader = () => {
  loader.classList.remove("show");
};

const showLoader = () => {
  loader.classList.add("show");
};

//*currentPage
let currentPage = 1;

//*waiting data
let waiting_data = () => {
  Notiflix.Notify.info("Waiting For Request", {
    timeout: 5000,
  });
};

//*NbrMovie returned
let total = 0;

//*MaxPage
function getNBRMovies(url) {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log("total_pages = " + data.total_pages);
        resolve(data.total_pages);
      });
  });
}
const limit = async () => {
  return await getNBRMovies(API_URL);
};

//*verify is there more pages
/*const hasMorePages = (page, limit, total) => {
  const startIndex = (page - 1) * limit + 1;
  return total === 0 || startIndex < total;
};*/
var cancel = 0;
//* load movies
async function loadMovies(countryselec, page, cancel) {
  if (cancel == 0) {
    try {
      setTimeout(async () => {
        var obj8 = await getMovies(API_URL, countryselec, page);
        var obj = [];
        for (let index = 0; index < obj8.length; index++) {
          obj.push(obj8[index]);
        }
        console.log(obj8);
        console.log(Object.keys(obj8).length);
        if (Object.keys(obj8).length != 0) {
          showMovies(obj);
          $("#cards img").visibility({
            type: "image",
            transition: "scale in",
            duration: 1000,
          });
        } else {
          console.log("max movies");
        }
      }, 500);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    try {
      var obj8 = await getSearch(searchURL, page, countryselec);
      var obj = [];
      for (let index = 0; index < obj8.length; index++) {
        obj.push(obj8[index]);
      }
      console.log(obj8);
      console.log(Object.keys(obj8).length);

      if (Object.keys(obj8).length != 0) {
        showMovies(obj);
        $("#cards img").visibility({
          type: "image",
          transition: "scale in",
          duration: 1000,
        });
      } else {
        console.log("max movies");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
var page1 = 1;
var countrydef = "KR";
/*window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      showLoader();
      page1++;
      loadMovies(page1);
    }
  },
  {
    passive: true,
  }
);
*/
document.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    page1++;
    loadMovies(countrydef, page1, cancel);
  }
});
document.getElementById("myBtn").addEventListener("click", () => {
  page1++;
  loadMovies(countrydef, page1, cancel);
});
//loadMovies(countrydef, page1);
document.getElementById("drop").addEventListener("change", () => {
  console.log($(".ui.dropdown").dropdown("get value").toUpperCase());
  cards.innerHTML = "";
  cancel = 0;
  page1 = 1;
  countrydef = $(".ui.dropdown").dropdown("get value").toUpperCase();
  loadMovies(countrydef, page1, cancel);
});
document.getElementById("search").addEventListener("input", () => {
  console.log($("#search").val());
  if ($("#search").val() == "") {
    cancel = 0;
    loadMovies(countrydef, page1, cancel);
  } else {
    cards.innerHTML = "";
    cancel = 1;
    page1 = 1;
    countrydef = $("#search").val();
    loadMovies(countrydef, page1, cancel);
  }
});
$(".ui.dropdown").dropdown({
  clearable: true,
  //on: "hover",
});
$(".ui.dropdown").dropdown("set selected", "kr");
