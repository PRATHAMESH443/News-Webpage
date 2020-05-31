
let science1 = document.getElementById("science");
science1.addEventListener("click", (e) => {
    e.preventDefault();

    let scienceApi = "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=0ec47830123e455f88d7aa650d7060cc";

    window.fetch(scienceApi)
        .then((scienceData) => {
            scienceData.json()
                .then(sciences => {
                    let scienceInfo = sciences.articles;

                    let output = [];
                    for (let science of scienceInfo) {
                        output += `
            <div class="row">
            <div class="col-md-8">
                <img src="${science.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${science.url}" target="_blank">
               <li class="text-dark"> 
              ${science.title}</li></a>
            </ul>
            </div>
            </div>
            
            `;
                    }
                    document.getElementById("sportSection").innerHTML = output;
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

});
