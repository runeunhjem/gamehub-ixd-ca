import { games } from "./db.js";

const gamesContainer = document.getElementById("games-container");
export { gamesContainer };

// Generate the HTML for all the games
const html = games.map(game => {

  // Determine which heart icon to display based on isWishlisted
  const heartIcon = game.isWishlisted === 1 ? "images/ico_heart.svg" : "images/ico_heart_+.svg";
  
  return `
  <div class="container game-cards" data-filter="${game.platform}-${game.type}">
    <div class="items ${game.itemName}">
      <div class="psnleft game-title">
        <h2 class="h4 type">${game.itemName}</h2><span class="gametitle-info">${game.platformShort} | ${game.type} Version</span>
      </div>
      <div class="game-cover">
        <a href="details.html?id=${game.id}" class="results-list">
        <img class="game-img" src=${game.coverImage} alt="${game.itemName} ${game.platform} | ${game.type} Version">
        </a>
      </div>                
      <div class="small psnleft release-date">Release Date:</div>
      <div class="small psnleft reldate">${game.releaseDate}</div>
      <div class="small psnleft">Type:</div>
      <div class="small psncenter type-ico">
        <img src="images/ico_disc.svg" alt="Disc">
      </div>
      <div class="small psnleft type-text">${game.type}</div>
      <div class="small psnleft region">Region:</div>
      <div class="small psncenter region-ico">
        <img src="images/ico_europe.svg" alt="Region | Europe">
      </div>
      <div class="small psnleft region-text">${game.region}</div>
      <div class="small psnleft platform">Platform:</div>
      <div class="small psncenter platform-ico">
        <img src="images/ico_psn.svg" alt="Playstation 5">
      </div>
      <div class="small psnleft platform-text">${game.platform}</div>
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
        <span class="dollar yellow">.</span>
        <span class="price currentPrice">${game.currentPrice}</span>
      </div>
      <div class="price__before psnright">
        <span class="dollar yellow">.</span>${game.beforePrice}
      </div>
    </div>
      <div class="psn__buttons">
        <div class="cta add-to-cart" data-id="${game.id}">Add to cart</div>
        <a href="details.html?id=${game.id}" class="results-list" role="button">
          <div class="cta">View Details</div>
        </a>
      </div>
    </div>
       `;
}).join("");
      
// Set the HTML of the gamesContainer element to the generated HTML
if(gamesContainer) {
  gamesContainer.innerHTML = html;
};

// const productsElement = document.querySelector(".number-of-products");
// productsElement.textContent = `Number of games: ${games.length}`;

// select all game containers
const gameContainers = document.querySelectorAll(".container.game-cards");

console.log("gameContainers is: ", gameContainers);

// get the count of game containers
const gameCount = gameContainers.length;
console.log("gameCount is: ", gameCount);
// select the element where you want to show the game count
const gameCountElement = document.querySelector(".number-of-products");
console.log("gameCountElement is: ", gameCountElement);
// set the text content of the element to the game count
gameCountElement.textContent = `Total Number OF games: ${gameCount}`;


// const numberOfGamesDiv = document.querySelector(".number-of-products");
// const numberOfFilteredGames = document.querySelectorAll(".contaier");
// numberOfGamesDiv.textContent = `Number OF games: ${numberOfFilteredGames.length}`;


