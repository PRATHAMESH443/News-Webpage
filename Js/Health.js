
let health1 = document.getElementById("health");
health1.addEventListener("click", (e) => {
    e.preventDefault();

    let healthApi = 
    "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0ec47830123e455f88d7aa650d7060cc";
   
    window.fetch(healthApi)
        .then((healthData) => {
            healthData.json()
                .then(healths => {
                    let healthInfo = healths.articles;

                    let output = [];
                    for (let health of healthInfo) {
                        output += `
          <div class="row">
            <div class="col-md-8">
                <img src="${health.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${health.url}" target="_blank">
               <li class="text-dark"> 
              ${health.title}</li></a>
            </ul>
            </div>
            </div>
            `;
                    }
                    document.getElementById("sportSection").innerHTML = output;
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

});
