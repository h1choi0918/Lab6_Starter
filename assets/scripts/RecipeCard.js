// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    this.attachShadow({mode:'open'});
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    let article = document.createElement("article");
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    let style = document.createElement("style");
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    style.textContent = `
      * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
    
      a {
        text-decoration: none;
      }
    
      a:hover {
        text-decoration: underline;
      }
    
      article {
        align-items: center;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 8px;
        display: grid;
        grid-template-rows: 118px 56px 14px 18px 15px 36px;
        height: auto;
        row-gap: 5px;
        padding: 0 16px 16px 16px;
        width: 178px;
      }
    
      div.rating {
        align-items: center;
        column-gap: 5px;
        display: flex;
      }
    
      div.rating>img {
        height: auto;
        display: inline-block;
        object-fit: scale-down;
        width: 78px;
      }
    
      article>img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 118px;
        object-fit: cover;
        margin-left: -16px;
        width: calc(100% + 32px);
      }
    
      p.ingredients {
        height: 32px;
        line-height: 16px;
        padding-top: 4px;
        overflow: hidden;
      }
    
      p.organization {
        color: black !important;
      }
    
      p.title {
        display: -webkit-box;
        font-size: 16px;
        height: 36px;
        line-height: 18px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    
      p:not(.title),
      span,
      time {
        color: #70757A;
        font-size: 12px;
      }`;
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
    this.shadowRoot.appendChild(article);
    this.shadowRoot.appendChild(style);
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    let element = this.shadowRoot.querySelector("article");
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    element.innerHTML = `
      <img src="https://link-to-article.com/recipe-thumbnail.jpg" alt="Recipe Title">
      <p class="title">
        <a href="https://link-to-article.com">Title</a>
      </p>
      <p class="organization">The Chef's Organization</p>
      <div class="rating">
        <span>5</span>
        <img src="./assets/images/icons/5-star.svg" alt="5 stars">
        <span>(500)</span>
      </div>
      <time>50 min</time>
      <p class="ingredients">
        Comma, Separated, List, of, Ingredients
      </p>
    `;
    element.querySelectorAll("img")[0].setAttribute("src" , data.imgSrc);
    element.querySelectorAll("img")[0].setAttribute("alt" , data.imgAlt);
    element.querySelector("a").setAttribute("href", data.titleLnk);
    element.querySelector("a").innerHTML = data.titleTxt;
    element.querySelectorAll("p")[1].innerHTML = data.organization;
    element.querySelectorAll("span")[0].innerHTML = data.rating;
    if (data.rating == "0") {
      element.querySelectorAll("img")[1].setAttribute("src", "./assets/images/icons/0-star.svg");
      element.querySelectorAll("img")[1].setAttribute("alt", "0 star");
    }
    else if (data.rating == "1") {
      element.querySelectorAll("img")[1].setAttribute("src", "./assets/images/icons/1-star.svg");
      element.querySelectorAll("img")[1].setAttribute("alt", "1 star");
    }
    else if (data.rating == "2") {
      element.querySelectorAll("img")[1].setAttribute("src", "./assets/images/icons/2-star.svg");
      element.querySelectorAll("img")[1].setAttribute("alt", "2 stars");
    }
    else if (data.rating == "3") {
      element.querySelectorAll("img")[1].setAttribute("src", "./assets/images/icons/3-star.svg");
      element.querySelectorAll("img")[1].setAttribute("alt", "3 stars");
    }
    else if (data.rating == "4") {
      element.querySelectorAll("img")[1].setAttribute("src", "./assets/images/icons/4-star.svg");
      element.querySelectorAll("img")[1].setAttribute("alt", "4 stars");
    }
    element.querySelectorAll("span")[1].innerHTML = data.numRatings;
    element.querySelector("time").innerHTML = data.lengthTime;
    element.querySelectorAll("p")[2].innerHTML = data.ingredients;};

}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);