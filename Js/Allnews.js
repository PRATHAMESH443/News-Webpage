// let technology1 = document.getElementById("technology");
// technology1.addEventListener("click", (e) => {
//     e.preventDefault();

let AllnewsApi =
  'http://newsapi.org/v2/top-headlines?country=in&apiKey=0ec47830123e455f88d7aa650d7060cc';
window
  .fetch(AllnewsApi)
  .then((AllnewsData) => {
    AllnewsData.json()
      .then((Allnewses) => {
        let AllnewsInfo = Allnewses.articles;

        let output = [];
        for (let Allnews of AllnewsInfo) {
          output += `
              <div class="row">
            <div class="col-md-8">
                <img src="${Allnews.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${Allnews.url}" target="_blank">
               <li class="text-dark"> 
              ${Allnews.title}</li></a>
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
