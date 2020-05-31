let sports1 = document.getElementById('sports');
sports1.addEventListener('click', (e) => {
  e.preventDefault();

  let sportsApi =
    'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=41df04ab827441629e87e893149c8a1f';

  window
    .fetch(sportsApi)
    .then((sportData) => {
      sportData
        .json()
        .then((sports) => {
          let sportInfo = sports.articles;

          let output = [];
          for (let sport of sportInfo) {
            
            output += `
            <div class="row">
            <div class="col-md-8">
                <img src="${sport.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${sport.url}" target="_blank">
               <li class="text-dark"> 
              ${sport.title}</li></a>
            </ul>
            </div>
            </div>
           
            `;
          }
          document.getElementById('sportSection').innerHTML = output;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});
