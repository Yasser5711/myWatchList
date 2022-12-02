const head = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Yasser5711/myWatchList/CSS/style.css">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    />
    <link rel="stylesheet" href="CSS/style.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/covervid/1.0/covervid.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <script type="text/javascript" src="https://unpkg.com/youtube-background/jquery.youtube-background.min.js"></script>
    <script
      type="text/javascript"
      src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ></script>
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/notiflix@3.2.5/dist/notiflix-aio-3.2.5.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>`;
const footer = `<div class="container">
  <div class="ui horizantale footer principale segment form-page">
    <div class="ui container">
      <div class="ui one column stackable center aligned grid">
        <div class="row">
          <div class="column">
            <button class="ui circular facebook icon button">
              <i class="facebook icon"></i>
            </button>
            <button class="ui circular twitter icon button">
              <i class="twitter icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
              <i class="linkedin icon"></i>
            </button>
            <button class="ui circular google plus icon button">
              <i class="google plus icon"></i>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="ui horizontal list">
            <a class="item" href="#">Home</a>
            <a class="item" href="#">Services</a>
            <a class="item" href="#">About</a>
            <a class="item" href="#">Terms</a>
            <a class="item" href="#">Privacy Policy</a>
          </div>
        </div>
        <div class="row">
          <div class="disabled item" href="#">YasMek Company © 2022</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="ui basic segment">
  <p></p>
</div></div>
</body>
<script src="https://cdn.jsdelivr.net/gh/Yasser5711/myWatchList/JS/scriptPage.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Yasser5711/myWatchList/JS/selected.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Yasser5711/myWatchList/JS/js.js"></script>

</html>
`;
const API_KEY =
  "?api_key=89aea8f3a6fd2437e4fcc421ebdfdbe9&with_origin_country=";
const API_KEY_1 = "?api_key=89aea8f3a6fd2437e4fcc421ebdfdbe9";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/tv/popular" + API_KEY;
const TV_ID = "/tv/";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_PATH_URL = "https://image.tmdb.org/t/p/original";
const API_KEY_2 = "?api_key=f3c52523473fadfe1c5a1ed60531b5cd";
const searchURL = BASE_URL + "/search/tv" + API_KEY_2;
const default_coming_soon_background =
  "https://zupimages.net/up/22/47/utl7.png";
const default_coming_soon_episode = "https://zupimages.net/up/22/47/imbw.png";
const defaultlogo = "https://zupimages.net/up/22/47/xvx6.png";
const default_background = "https://zupimages.net/up/22/47/vvik.jpg";

var page = "&page=";
var country = "";
const default_personne =
  "https://www.dummyimage.com/439x658/e6e6e6/000000.jpg&text=";
const default_poster = "https://zupimages.net/up/22/47/3xs3.jpg";
const FirstChar = (str) => {
  return str
    .match(/(?<=(\s|^))[^\\pL+]/gi)
    .join("")
    .toUpperCase();
};
//*getTitle
const getTitle = async (id) => {
  var lastURL = BASE_URL + TV_ID + id + API_KEY_1;
  const response = await fetch(lastURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  // handle 404

  return response;
};

//*genresfct
let genresfct = (obj) => {
  let txt = "";
  for (let x in obj) {
    txt += obj[x]["name"] + "*";
  }
  //console.log("genresfct : " + txt);
  return txt;
};

//*origin_countryfct
let origin_countryfct = (obj) => {
  let txt = "";
  for (let x in obj) {
    txt += obj[x] + "*";
  }
  //console.log("origin_countryfct : " + txt);
  return txt;
};

//*getRandom_Backdrop_path_images
let getRandom_Backdrops_path_images = async (id) => {
  var url = BASE_URL + TV_ID + id + "/images" + API_KEY_2;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.posters);
      //console.log(data.bacdrops);
      if (data.backdrops.length == 0) {
        if (data.posters.length == 0) {
          data = default_background;
        } else {
          data = data.posters;
        }
      } else {
        data = data.backdrops;
      }

      return data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  // handle 404

  return response;
};
//*Backdrop_path
let getRandom_Backdrop_path_images = async (data) => {
  let original = "";
  let w300 = "";
  if (data.length == 0) {
    original += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
    w300 += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;

    return {
      original_img: original,
      w300_img: w300,
    };
  } else {
    if (data[0].aspect_ratio < 1) {
      original += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
      w300 += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
      return {
        original_img: original,
        w300_img: w300,
      };
    } else {
      try {
        for (const key of data) {
          //array.push(key["file_path"]);
          original += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="https://image.tmdb.org/t/p/original/${key["file_path"]}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
          w300 += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="https://image.tmdb.org/t/p/w300/${key["file_path"]}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
        }

        //console.log(array);
      } catch (error) {
        original += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
        w300 += `<div class="swiper-slide"><img  class="ui image swiper-lazy" data-src="${defaultlogo}" alt="" /><div class="swiper-lazy-preloader"></div></div>`;
      } finally {
        return {
          original_img: original,
          w300_img: w300,
        };
      }
    }
  }
};

//*getRandom_Posters_path_images
let getRandom_Posters_path_images = async (id) => {
  var url = BASE_URL + TV_ID + id + "/images" + API_KEY_2;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  // handle 404

  return response;
};
//*Poster_path
let getRandom_Poster_path_images = async (data) => {
  var array = [];
  for (const key of data.posters) {
    array.push(key["file_path"]);
  }

  return array;
};

//*getTrailer
let getTrailer = async (id) => {
  var url = BASE_URL + TV_ID + id + "/videos" + API_KEY_1;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      var array = [];
      //console.log(data);
      for (const key of data.results) {
        if (key["type"] == "Trailer" && key["site"] == "YouTube") {
          array.push(key["key"]);
        }
      }

      return array;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return response;
};

//*getNetworks
let getNetworks = async (data) => {
  let txt = "";
  var homepage;
  if (data.homepage != "") {
    homepage = data.homepage;
  } else {
    homepage = "#";
  }
  var network = data.networks;
  for (const key of network) {
    //console.log("path:" + key["logo_path"]);
    txt += `<a href="${homepage}" class="ui image">
    <img src="https://image.tmdb.org/t/p/original/${key["logo_path"]}">
  </a>`;
  }
  return txt;
};

//*getSeasons
let getSeasons = async (data) => {
  let txt = "";
  let seasons = data.seasons;
  let id = data.id;
  //console.log(seasons);
  for (const key of seasons) {
    //console.log("path:" + key["logo_path"]);
    if (key["season_number"] != 0) {
      if (key["air_date"] == null) {
        txt += `<div class="swiper-slide">
        
    
            <img data-id="${id}" class="ui image swiper-lazy" data-src="${default_coming_soon_episode}" alt="" data-seasonnumber="${key.season_number}" onclick="getComing_Soon(this)" />
        
        <div class="swiper-lazy-preloader"></div>
    </div>`;
      } else {
        if (key["poster_path"] == null) {
          //console.log(seasons.id);
          txt += `<div class="swiper-slide">
        <img data-id="${id}" class="ui image swiper-lazy" data-src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="" data-seasonnumber="${key.season_number}" onclick="getSeason_Info(this)" />
        <div class="swiper-lazy-preloader"></div>
    </div>`;
        } else {
          //console.log(seasons.id);
          txt += `<div class="swiper-slide">
        
    
            <img data-id="${id}" class="ui image swiper-lazy" data-src="https://image.tmdb.org/t/p/original/${key["poster_path"]}" alt="" data-seasonnumber="${key.season_number}" onclick="getSeason_Info(this)" />
        
        <div class="swiper-lazy-preloader"></div>
    </div>`;
        }
      }
    }
  }
  //console.log(txt);
  return txt;
};

//*getCreated_By
let getCreated_By = async (data) => {
  let txt = "";
  let credits = data.created_by;
  for (const key of credits) {
    //console.log("path:" + key["logo_path"]);
    txt += `<div class="ui card mycard" style="margin-left:6px;margin-right:6px;border-radius:none !important">
    <div class="ui rounded image" >
      <img  src="${
        key["profile_path"]
          ? "https://image.tmdb.org/t/p/original/" + key["profile_path"]
          : default_personne + FirstChar(key["name"])
      }">
    </div>
    <div class="content">
    <h6 class="header">${key["name"]}</h6>
  </div>
  </div>`;
    //console.log(key["name"]);
    console.log(FirstChar(key["name"]));
  }

  return txt;
};

//*getCast
let getCast = async (id) => {
  var url = BASE_URL + TV_ID + id + "/credits" + API_KEY_1;
  let txt = "";
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      var cast = data.cast;
      for (const key of cast) {
        //console.log("path:" + key["logo_path"]);
        txt += `<div class="swiper-slide"><div class="ui card mycast swiper-slide-container" ><a class="image" href="#">
        <img
        class="ui  image swiper-lazy" 
        data-src="${
          key["profile_path"]
            ? "https://image.tmdb.org/t/p/original/" + key["profile_path"]
            : default_personne + FirstChar(key["name"])
        }"
        alt=""
      /><div class="swiper-lazy-preloader"></div></a>
      <div class="content">
    <a class="header" href="#">${key["name"]}</a>
    <div class="meta">
      <a>Character : ${key["character"]}</a>
    </div>
  </div>
      </div></div>`;
      }

      return txt;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return response;
};

//*getRecommendations
let getRecommendations = async (id) => {
  var url = BASE_URL + TV_ID + id + "/recommendations" + API_KEY_1;
  let txt = "";
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.results[0]["poster_path"]);
      var recommendations = data.results;
      for (let index = 0; index < recommendations.length; index++) {
        txt += `<div class="swiper-slide">
    <img
    class="ui image" 
    src="https://image.tmdb.org/t/p/w300/${recommendations[index]["poster_path"]}"
    alt=""
  /></div>`;
      }

      return txt;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return response;
};

//*getSeason_Data
let getSeason_Data = async (elem) => {
  var num = $(elem).data("seasonnumber");
  //console.log(num);
  var id = $(elem).data("id");
  var url = BASE_URL + TV_ID + id + "/season/" + num + API_KEY_1;
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return response;
};

//*getSeason_Trailer
let getSeason_Trailer = async (elem) => {
  var num = $(elem).data("seasonnumber");
  //console.log(num);
  var id = $(elem).data("id");
  //console.log(id);
  var url = BASE_URL + TV_ID + id + "/season/" + num + "/videos" + API_KEY_1;
  var array1 = await getTrailer(id);
  var array = [];
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const key of data.results) {
        if (
          (key["type"] == "Trailer" || key["type"] == "Teaser") &&
          key["site"] == "YouTube"
        ) {
          array.push(key["key"]);
        }
      }
      //console.log(array);
      if (array.length == 0) {
        array.push(array1[Math.floor(Math.random() * array1.length)]);
      }
      return array;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });

  return response;
};

//*getEpisode_Backdrops
let getEpisode_Backdrops = async (id, season, episode) => {
  var url =
    BASE_URL +
    TV_ID +
    id +
    "/season/" +
    season +
    "/episode/" +
    episode +
    "/images" +
    API_KEY_2;
  var ep_stills_slide = "";
  var ep_stills_thumb = "";
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      for (const key of data.stills) {
        //console.log(key["file_path"]);
        ep_stills_slide += `<div class="swiper-slide "><img
    class="ui  image swiper-lazy" 
    data-src="https://image.tmdb.org/t/p/original/${key["file_path"]}"
    alt=""
  /><div class="swiper-lazy-preloader"></div></div>`;
        ep_stills_thumb += `<div class="swiper-slide"><img
  class="ui  image swiper-lazy" 
  data-src="https://image.tmdb.org/t/p/w300/${key["file_path"]}"
  alt=""
/><div class="swiper-lazy-preloader"></div></div>`;
      }

      //return { epslide: ep_stills_slide, epthumb: ep_stills_thumb };
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return { ep_stills_slide: ep_stills_slide, ep_stills_thumb: ep_stills_thumb };
};

//*getEpisode_Guest_Stars
let getEpisode_Guest_Stars = (data) => {
  let txt = "";
  //console.log(data);
  for (var key of data) {
    txt += `<div class="swiper-slide">
    <div class="ui card  swiper-slide-container">
        <a class="image" href="#">
            <img class="ui image swiper-lazy" data-src="${
              key["profile_path"]
                ? "https://image.tmdb.org/t/p/original/" + key["profile_path"]
                : default_personne + FirstChar(key["original_name"])
            }" alt="" />
            <div class="swiper-lazy-preloader"></div>
        </a>
        <div class="content">
            <a class="header" href="#">${key["original_name"]}</a>
            <div class="meta">
                <a>Character : ${key["character"]}</a>
            </div>
        </div>
    </div>
</div>`;
  }
  return txt;
};

//*getEpisode_Info
let getEpisode_Info = async (elem) => {
  var show_id = $(elem).data("show_id");
  var season_num = $(elem).data("season");
  var episode_num = $(elem).data("episode");
  //console.log(show_id);
  var url =
    BASE_URL +
    TV_ID +
    show_id +
    "/season/" +
    season_num +
    "/episode/" +
    episode_num +
    API_KEY_1;
  var { ep_stills_slide, ep_stills_thumb } = await getEpisode_Backdrops(
    show_id,
    season_num,
    episode_num
  );
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      var stars = getEpisode_Guest_Stars(data.guest_stars);
      let txt1 = `
      <div class="header">${data.name}</div>
      <div class="content">
          <div class="ui items">
              <div class="item">
                  <div class="ui large transf image">
                      <img src="https://image.tmdb.org/t/p/original/${data.still_path}" alt=""  style="border-radius: 16px !important;"/>
                  </div>
                  <div class="middle aligned content">
                      <div class="header">Episode ${data.episode_number}</div>
                      <div class="ui divider"></div>
                      <h5 class="">Rating : ${data.vote_average}/10<i class="yellow star icon"></i> <sup>From : ${data.vote_count}</sup></h5>
                      <h5>Runtime : ${data.runtime}min</h5>
                      <h5>Air Date : ${data.air_date}</h5>
                  </div>
              </div>
              <div class="ui divider"></div>
      
              <div class="description">
                  <p>${data.overview}</p>
              </div>
              <div class="ui divider"></div>
              <h4>Galerie :</h4>
              <div class="ui basic segment">
                  <div class="swiper" id="ep_stills_slide">
                      <div class="swiper-wrapper">
                          <!-- Slides -->
      
                          ${ep_stills_slide}
                      </div>
                  </div>
              </div>
              <div class="ui basic segment d-none d-lg-block d-xl-block" id="">
                  <div class="swiper epthumb" id="ep_stills_thumb">
                      <div class="swiper-wrapper">${ep_stills_thumb}</div>
                  </div>
              </div>
          </div>
          <div class="ui divider"></div>
      <h4>Guest Stars :</h4>
      <div class="ui basic segment">
          <div class="ui cards swiper" id="stars"><div class="swiper-wrapper">${stars}</div><div class="swiper-pagination"></div></div>
      </div>
      </div>
      
      <div class="actions">
          <div class="ui black button" id="first_modal">Back</div>
          
      </div>
      `;
      $(".ui.second.modal").modal("show").modal("setting", "closable", false);

      setTimeout(() => {
        document.getElementById("modal2").innerHTML = txt1;
        $(".ui.first.modal").modal(
          "attach events",
          "#first_modal",
          "show refresh"
        );
        const swiper1 = new Swiper("#ep_stills_thumb", {
          slidesPerView: 4,
          centeredSlides: true,
          spaceBetween: 10,
          preloadImages: false,
          speed: 400,
          spaceBetween: 10,
          lazy: {
            loadPrevNext: true,
          },

          grabCursor: true,
        });
        const swiper = new Swiper("#ep_stills_slide", {
          slidesPerView: 1,
          spaceBetween: 100,
          preloadImages: false,
          speed: 400,
          centeredSlides: true,
          lazy: {
            loadPrevNext: true,
          },
          thumbs: {
            swiper: swiper1,
          },
        });
        const swiper5 = new Swiper("#stars", {
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          direction: "horizontal",
          loop: true,
          effect: "slide",

          slidesPerView: 1.1,
          spaceBetween: 20,
          centeredSlides: true,
          grabCursor: true,
          setWrapperSize: true,

          preloadImages: false,
          lazy: {
            loadPrevNext: true,
          },
          breakpoints: {
            992: {
              slidesPerView: 4,
              centeredSlides: false,
              spaceBetween: 5,
            },
            690: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 40,
            },
          },
        });
      }, 500);

      return txt1;
    })
    .catch((error) => {
      console.error("There was an error!", error);
      return "";
    });
  return response;
};

//*getComing_Soon
let getComing_Soon = async (elem) => {
  var data = await getSeason_Data(elem);
  var trailer = await getSeason_Trailer(elem);
  let txt = `<i class="close icon"></i>
  <div class="header">${data.name}</div>
  <div class="content">
      <div class="ui items">
          <div class="ui divider"></div>
          <div class="ui basic segment">
              <div
                  class="ui embed ytb"
                  data-source="youtube"
                  data-id="${
                    trailer[Math.floor(Math.random() * trailer.length)]
                  }"
                  data-placeholder="${default_coming_soon_background}"
                  style="border-radius: 16px !important;"
              ></div>
          </div>
          <div class="ui divider"></div>
      </div>
  </div>
  <div class="actions">
      <div class="ui black deny button">Nope</div>
  </div>
  `;
  document.getElementById("modal3").innerHTML = txt;
  $(".ui.embed.ytb").embed();

  $(".ui.third.modal")
    .modal({
      onHide: () => {
        $(".ui.embed.ytb").embed("destroy");
      },
      onVisible: () => {
        $(".ui.embed.ytb").embed("reset");
      },
    })
    .modal("show")
    .modal("setting", "closable", false);
};

//*getSeason_Info
let getSeason_Info = async (elem) => {
  var data = await getSeason_Data(elem);
  var trailer = await getSeason_Trailer(elem);
  var episodes = data.episodes;
  //console.log(episodes[0].still_path);
  var epslide = "";
  let epthumb = "";

  for (const key of episodes) {
    if (key["still_path"] != null) {
      epslide += `<div class="swiper-slide conti"><img
    class="ui  image swiper-lazy" 
    data-src="https://image.tmdb.org/t/p/original/${key["still_path"]}"
    alt=""
  /><div class="contenta "><h4>Episode ${
    key["episode_number"]
  }:</h4>${_.truncate(key["overview"], {
        length: 50,
        omission: "...",
        separator: " ",
      })}<span id="infoo" data-path="${key["overview"]}"  data-season="${
        key["season_number"]
      }" data-episode="${key["episode_number"]}" data-show_id="${
        key["show_id"]
      }" onclick="getEpisode_Info(this)" >Read More.</span></div><div class="swiper-lazy-preloader"></div></div>`;
      epthumb += `<div class="swiper-slide"><img
  class="ui  image swiper-lazy" 
  data-src="https://image.tmdb.org/t/p/w300/${key["still_path"]}"
  alt=""
/><div class="swiper-lazy-preloader"></div></div>`;
    } else {
      epslide += `<div class="swiper-slide conti"><img
    class="ui  image swiper-lazy" 
    data-src=${defaultlogo}
    alt=""
  /><div class="contenta "><h4>Episode ${
    key["episode_number"]
  }:</h4>${_.truncate(key["overview"], {
        length: 50,
        omission: "...",
        separator: " ",
      })}<span id="infoo" data-path="${key["overview"]}"  data-season="${
        key["season_number"]
      }" data-episode="${key["episode_number"]}" data-show_id="${
        key["show_id"]
      }" onclick="getEpisode_Info(this)" >Read More.</span></div><div class="swiper-lazy-preloader"></div></div>`;
      epthumb += `<div class="swiper-slide"><img
  class="ui  image swiper-lazy" 
  data-src=${defaultlogo}
  alt=""
/><div class="swiper-lazy-preloader"></div></div>`;
    }
  }

  let txt = `<i class="close icon"></i>
  <div class="header">${data.name}</div>
  <div class=" content">
    <div class="ui items">
      <div class="item">
        <div class="ui small image">
          <img
            src="https://image.tmdb.org/t/p/original/${data.poster_path}"
            alt=""
          />
        </div>
        <div class="middle aligned content">
          <div class="header">Overview</div>
          <div class="description">
            <p>${data.overview}</p>
          </div>
        </div>
      </div>
      <div class="ui divider"></div>
      <div class="ui basic segment">
        <div
          class="ui embed ytb"
          data-source="youtube"
          data-id="${trailer[Math.floor(Math.random() * trailer.length)]}"
          data-placeholder="https://image.tmdb.org/t/p/original/${
            data.poster_path
          }" style="border-radius: 16px !important;" 
        ></div>
      </div>
      <div class="ui divider"></div>
      <div class="ui basic segment">
        <div class="swiper" id="seasonep">
          <div class="swiper-wrapper">
            <!-- Slides -->

            ${epslide}
          </div>
        </div>
      </div>
    </div>
    <div class="ui basic segment d-none d-lg-block d-xl-block" id="">
      <div class="swiper epthumb" id="epthumb">
        <div class="swiper-wrapper">${epthumb}</div> 
      </div>
    </div>
    
  </div>
  <div class="actions">
      <div class="ui black deny button">Back</div>
      
    </div>`;

  document.getElementById("modal1").innerHTML = txt;
  $(".ui.embed.ytb").embed();

  $(".ui.coupled.modal").modal({
    allowMultiple: false,
  });
  $(".ui.first.modal")
    .modal({
      onHide: () => {
        $(".ui.embed.ytb").embed("destroy");
      },
      onVisible: () => {
        $(".ui.embed.ytb").embed("reset");
      },
    })
    .modal("show")
    .modal("setting", "closable", false);

  const swiper1 = new Swiper("#epthumb", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 10,
    preloadImages: false,
    speed: 400,
    spaceBetween: 10,
    lazy: {
      loadPrevNext: true,
    },
    grabCursor: true,
  });
  const swiper = new Swiper("#seasonep", {
    slidesPerView: 1,
    setWrapperSize: true,
    spaceBetween: 100,
    preloadImages: false,
    speed: 400,
    centeredSlides: true,
    lazy: {
      loadPrevNext: true,
    },
    thumbs: {
      swiper: swiper1,
    },
  });
};

async function fu(elem) {
  var id = $(elem).data("id");
  var target = $(elem).data("target");
  console.log("id:" + id);
  var response = await getTitle(id);
  const {
    name,
    original_name,
    vote_average,
    popularity,
    first_air_date,
    last_air_date,
    genres,
    languages,
    origin_country,
    status,
    number_of_seasons,
    number_of_episodes,
    tagline,
    overview,
    backdrop_path,
    poster_path,
  } = response;

  //var response2 = await getRandom_Backdrop_path_images(id);
  var img = await getRandom_Backdrops_path_images(id);
  console.log(img);
  var response1 = await getRandom_Posters_path_images(id);
  var img1 = await getRandom_Poster_path_images(response1);
  console.log(img1);
  var trailer = await getTrailer(id);
  var networks = await getNetworks(response);
  var { original_img, w300_img } = await getRandom_Backdrop_path_images(img);

  var seasons = await getSeasons(response);
  var created_by = await getCreated_By(response);
  var Cast = await getCast(id);
  var recommendations = await getRecommendations(id);

  const winHtml = `
  <title>${name}</title>
  </head>
  <style>
  body{
    background-image: url("${(background = img[
      Math.floor(Math.random() * img.length)
    ].file_path
      ? BACKDROP_PATH_URL +
        img[Math.floor(Math.random() * img.length)].file_path
      : default_background)}");
  }
     
  </style>
  <body >
  <div class="cont1 fadee">
      <div class="ui basic segment">
        <p></p>
      </div>
      <div class="ui basic segment">
        <p></p>
      </div>
      <div class="ui basic segment">
        <p></p>
      </div>
      <div class="ui basic segment">
        <p></p>
      </div>
      <div class="ui very padded container segment principale">
        <div class="ui items">
          <div class="item">
            <div class="ui medium image">
              <img
                class="linked posterimg"
                src="${(poster =
                  img1.length != 0
                    ? "https://image.tmdb.org/t/p/w300/" +
                        img1[Math.floor(Math.random() * img1.length)] ||
                      "https://image.tmdb.org/t/p/w300/" + poster_path
                    : default_poster)}"
              />
            </div>
            <div class="content">
              <h1 class="">${name}</h1>
  
              <h3 id="original_name">${original_name}</h3>
  
              <div class="description" >
                <h5 id="vote_average" >Rating : ${vote_average}/10<i
                    class="yellow star icon"
                  ></i></h5>
                  
                </h5>
                <h5 id="popularity" >Popularity : ${popularity}</h5>
  
                <h5 id="first_air_date" >First air date : ${first_air_date}</h5>
                <h5 id="last_air_date"> Last air date : ${last_air_date}</h5>
                <h5 id="genre">
                  Genre : ${genresfct(genres)}
                </h5>
                <h5 id="languages" >Language : ${languages}</h5>
                <h5 id="origin_country" >Origine Country : ${origin_countryfct(
                  origin_country
                )}</h5>
  
                <h5 id="status" >Statut : ${status}</h5>
              </div>
              <div class="extra">
                <div class="ui  accordion">
                  <div class="active title">
                    <h5>Additional Details<i class="dropdown icon"></i></h5>
                  </div>
                  <div class="content">
                    <div class="ui list">
                      <div class="item myitem">number of seasons : ${number_of_seasons}</div>
                      <div class="ui divider"></div>
                      <div class="item myitem">number of episodes : ${number_of_episodes}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui very padded container segment principale">
        <center><h1>${tagline}</h1></center>
        <div class="ui divider"></div>
        <div
          class="ui embed"
          style="border-radius: 16px !important"
          data-source="youtube"
          data-id="${trailer[Math.floor(Math.random() * trailer.length)]}"
          data-placeholder="${(placeholder =
            img.length != 0
              ? "https://image.tmdb.org/t/p/original/" +
                img[Math.floor(Math.random() * img.length)].file_path
              : defaultlogo)}"
        ></div>
        <div class="ui divider"></div>
        <div class="ui segment secondaire" id="overview" >
          <div class="ui header">Overview</div>
          ${overview}
        </div>
        <div class="ui divider"></div>
        <div class="ui segment secondaire" id="networks" >
          <div class="ui header">Where to watch :</div>
          <div class="ui tiny images" id="networks">${networks}
            
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="ui styled fluid accordion secondaire" id="" >
        <div class="title">
          <i class="dropdown icon"></i>
          Galerie:
        </div>
        <div class="active content">
        <div class="ui basic segment">
        
          <div class="ui huge images swiper"id="swiper3"><div class="swiper-wrapper">${original_img}</div></div>
          <div class="ui basic segment d-none d-lg-block d-xl-block" id="gallery-thumbs">
              <div class="swiper gallery-thumbs "><div class="swiper-wrapper">${w300_img}</div></div><div class="swiper-button-prev"></div><div class="swiper-scrollbar"></div>
              <div class="swiper-button-next"></div></div>
        </div>
        
        </div></div>   
    
    <div class="ui divider"></div>
    <div class="ui styled fluid accordion secondaire">
    <div class="title">
      <i class="dropdown icon"></i>
      Seasons:
    </div>
    <div class="active content">
      <div class="ui basic segment">
        
        <div class="ui  small images swiper" id="swiper2"><div class="swiper-wrapper">${seasons}</div>
          
        </div>
      </div>
    </div>
  </div>
  <div class="ui divider"></div>
    <div class="ui styled fluid accordion secondaire">
    <div class="title">
      <i class="dropdown icon"></i>
      Created By:
    </div>
    <div class=" content">
      <div class="ui basic segment">
        
        <div class="ui six doubling cards" id="">${created_by}
          
        </div>
      </div>
    </div>
  </div>
  <div class="ui divider"></div>
    <div class="ui styled fluid accordion secondaire">
    <div class="title">
      <i class="dropdown icon"></i>
      Cast:
    </div>
    <div class="active content">
      <div class="ui basic segment">
        
        <div class="ui cards swiper gallery-top" id=""><div class="swiper-wrapper">${Cast}</div></div>
      </div>
    </div>
  </div>
  <div class="ui divider"></div>
    <div class="ui styled fluid accordion secondaire">
    <div class="title">
      <i class="dropdown icon"></i>
      Recommendations:
    </div>
    <div class="active content">
      <div class="ui basic segment">
        
        <div class="ui  small images swiper" id="swiper1"><div class="swiper-wrapper">${recommendations}</div>
        
        </div><div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
  
      
      
    
  </div>
  
  <div class="ui long first coupled  basic modal principalemodal" id="modal1"></div>
  
  <div class="ui long second coupled basic modal principalemodal" id="modal2"></div>

  <div class="ui long third  basic modal principalemodal" id="modal3"></div>
  `;
  $(".ui.accordion").accordion();
  $(".ui.embed").embed();

  /*var URL1 = window.URL || window.webkitURL;
  const winUrl = URL1.createObjectURL(
    new Blob([winHtml], { type: "text/html" })
  );
  let doc = document.implementation.createHTMLDocument("New Document");
  doc.innerHTML = winHtml;*/

  /*var xhr = new XMLHttpRequest();
  xhr.open("GET", winUrl, true);
  xhr.responseType = "blob";
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      var url = (
        window.URL ||
        window.webkitURL ||
        window ||
        {}
      ).createObjectURL(xhr.response);

      // now url is ready
    }
  };
  xhr.send();*/
  try {
    var pagedelec = head + winHtml + footer;
    setTimeout(() => {
      const win = window.open("", target);
      win.document.write(pagedelec);
      win.document.close();
      Notiflix.Notify.success("Success " + name, {
        closeButton: true,

        clickToClose: true,
      });
    }, 2000);
  } catch (error) {
    Notiflix.Notify.failure("error " + name, {
      closeButton: true,
      timeout: 2000,
    });
  } finally {
  }
  var error1 = [];
  window.addEventListener("error", (event) => {
    error1.push(name);
    Notiflix.Notify.failure("error " + error1[error1.length - 1], {
      timeout: 2000,
    });

    console.log(error1[error1.length - 1]);
  });
  /*var opened = window.open("", "_system");
  opened.document.write(winHtml);
  opened.document.close();*/
}
//*pass:sxbIvaU3)!b

Notiflix.Loading.pulse();
setTimeout(() => {
  $("body").removeClass("cont");
  Notiflix.Loading.remove();
}, 5000);
