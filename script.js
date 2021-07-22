//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

//Jg5LfuShJ1wkwiAmbGI5BcvPKqRoYPb5

let url =
  'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Jg5LfuShJ1wkwiAmbGI5BcvPKqRoYPb5';

let headlines = document.getElementById('headlines');
//id is in html body (div)

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //here its saying, fetch all the data from the
    //url, then take watever you get (the string)
    //and reconize that as json(js objec

    data.results.map((article) => {
      console.log(article.title);
      //the . before title,for example, is to name the object
      //so here we can see every article title

      //now we gonna creat an <a> tag in javascript
      //to remember <a href = "link">text</a>
      let a = document.createElement('a');
      a.setAttribute('href', article.url);
      a.innerHTML = article.title;

      //now we're putting the description of every article
      //p means paragraph (as we've seen before with <a> tag)
      let p = document.createElement('p');
      p.innerHTML = article.abstract;

      let img = document.createElement('img');
      img.setAttribute('src', article.multimedia[0].url);

      headlines.appendChild(a);
      //adding the element <a> in the website,
      //now we can see the article titles and be redirected
      headlines.append(img);
      headlines.appendChild(p);
      //this is the description(abstract) of articles.
      //it has to be in the bottom, bcs title(a) comes first
    });
  });
