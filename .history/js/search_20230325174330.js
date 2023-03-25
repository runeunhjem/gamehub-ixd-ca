import { games } from "./db.js";

const gamesContainer = document.getElementById("games-container");

let searchTerm = "";
const filter = document.getElementById("filters");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const searchQuery = params.get('query');

const form = document.getElementById("search-form");
const input = form.querySelector("input[name='query']");

input.addEventListener("focus", function() {
  document.querySelector("#search").style.backgroundColor = "#c8fbd5";
  document.querySelector("#search").style.color = "#000";
});

const searchInput = document.querySelector("#search");
document.addEventListener("click", function(event) {
  if (!searchInput.contains(event.target)) {
    searchInput.style.backgroundColor = "#000";
  }
});

if(searchQuery) {
  if(searchQuery) {
    searchTerm = searchQuery;
    console.log(`SearchTerm is: ${searchTerm}`);
  } else {  
    searchTerm = document.querySelector("#search").value;
    console.log(`SearchTerm is: ${searchTerm}`);
  };
  gamesContainer.innerHTML = '';
  let filteredGames = searchQuery.length === 0 ? games : games.filter(game => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
  
  filteredGames.forEach((game) => {
    filter.addEventListener("change", function() {
      const selectedPlatform = filter.value;
      const gameID = target.dataset.id;
      const game = games.find(game => game.id === gameID);
      const heartIcon = game.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
      
      gamesContainer.innerHTML = '';
      let filteredGames = searchTerm.length === 0 ? games : games.filter(game => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
      if (selectedPlatform !== "all") {
        filteredGames = filteredGames.filter(game => game.platform === selectedPlatform);
      };
      filteredGames.forEach((game) => {
        // append game to gamesContainer
      });
    });
    const heartIcon = game.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
      gamesContainer.innerHTML += `
        <div class="container">
          <div class="items ${game.itemName}">
            <div class="psnleft game-title">
              <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
            </div>
            <div class="game-cover">
            <a href="details.html?id=${game.id}" class="results-list">
              <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
            </a>
            </div>                
            <div class="small psnleft release-date">Release Date:</div>
            <div class="small psnright reldate">${game.releaseDate}</div>
            <div class="small psnleft">Type:</div>
            <div class="small psncenter type-ico">
              <img src="images/ico_disc.svg" alt="Disc">
            </div>
            <div class="small psnright type-text">${game.type}</div>
            <div class="small psnleft region">Region:</div>
            <div class="small psncenter region-ico">
              <img src="images/ico_europe.svg" alt="Region | Europe">
            </div>
            <div class="small psnright region-text">${game.region}</div>
            <div class="small psnleft platform">Platform:</div>
            <div class="small psncenter platform-ico">
              <img src="images/ico_psn.svg" alt="Playstation 5">
            </div>
            <div class="small psnright platform-text">${game.platform}</div>                
            <div class="psnleft gsrating">Gamespot Rating:</div>
            <div class="psnright rating">${game.gamespotRating}</div>
            <div class="small psnleft readreview">
              <a href="https://www.gamespot.com/games/reviews/">Read review</a>
            </div>
            <div class="togglewishlist add-to-wishlist">
              <span class="small psnright" href="wishlist.html">
                <img class="remove small psnright add-to-wishlist" src="${heartIcon}" alt="Add to wishlist" data-id="${game.id}">
              </span>
            </div>
            <div class="price psnright">
              <span class="dollar yellow">.</span><span class="currentPrice price">${game.currentPrice}</span>
            </div>
            <div class="price__before psnright">
              <span class="dollar yellow">.</span>${game.beforePrice}
            </div>
          </div>
          <div class="psn__buttons">
            <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
            <a href="details.html?id=${game.id}" class="results-list" role="button">
            <div class="cta">View Details</div></a>
          </div>
        </div>`;
        const productsElement = document.querySelector(".number-of-products");
        productsElement.textContent = `Number of games: ${filteredGames.length}`;
  });
} else {
    const searchForm = document.querySelector("#search-form");
    // Searchform with eventlistener on submit
    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      searchTerm = document.querySelector("#search").value;
      console.log(`SearchTerm is: ${searchTerm}`);
      gamesContainer.innerHTML = '';
  
  input.value = ""; 
    let filteredGames = searchTerm.length === 0 ? games : games.filter(game => game.itemName.toLowerCase().includes(searchTerm.toLowerCase()));  
      filteredGames.forEach((game) => {
        gamesContainer.innerHTML += `
          <div class="container">
            <div class="items ${game.itemName}">
              <div class="psnleft game-title">
                <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
              </div>
              <div class="game-cover">
              <a href="details.html?id=${game.id}" class="results-list">
                <img src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
              </a>
              </div>                
              <div class="small psnleft release-date">Release Date:</div>
              <div class="small psnright reldate">${game.releaseDate}</div>
              <div class="small psnleft">Type:</div>
              <div class="small psncenter type-ico">
                <img src="images/ico_disc.svg" alt="Disc">
              </div>
              <div class="small psnright type-text">${game.type}</div>
              <div class="small psnleft region">Region:</div>
              <div class="small psncenter region-ico">
                <img src="images/ico_europe.svg" alt="Region | Europe">
              </div>
              <div class="small psnright region-text">${game.region}</div>
              <div class="small psnleft platform">Platform:</div>
              <div class="small psncenter platform-ico">
                <img src="images/ico_psn.svg" alt="Playstation 5">
              </div>
              <div class="small psnright platform-text">${game.platform}</div>                
              <div class="psnleft gsrating">Gamespot Rating:</div>
              <div class="psnright rating">${game.gamespotRating}</div>
              <div class="small psnleft readreview">
                <a href="https://www.gamespot.com/games/reviews/">Read review</a>
              </div>
              <div class="togglewishlist">
                <a class="small psnright" href="wishlist.html"><img class="remove small psnright" src="images/ico_heart.svg" alt="Add to wishlist"></a>
              </div>                
              <div class="price psnright">
              <span class="dollar yellow">.</span><span class="currentPrice price">${game.currentPrice}</span>
              </div>
              <div class="price__before psnright">
              <span class="dollar yellow">.</span>${game.beforePrice}
              </div>
              </div>
              <div class="psn__buttons">
              <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
              <a href="details.html?id=${game.id}" class="results-list" role="button">
              <div class="cta">View Details</div></a>
              </div>
              </div>`;  
              
              const productsElement = document.querySelector(".number-of-products");
              productsElement.textContent = `Number of games: ${filteredGames.length}`;
              
            });
          });
        };
