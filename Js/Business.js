
let business1 = document.getElementById("business");
business1.addEventListener("click", (e) => {
    e.preventDefault();

    let businessApi ="http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0ec47830123e455f88d7aa650d7060cc" ;

    window.fetch(businessApi)
        .then((businessData) => {
            businessData.json()
                .then(businesses => {
                    let sportInfo = businesses.articles;

                    let output = [];
                    for (let business of sportInfo) {
                        output += `
           <div class="row">
            <div class="col-md-8">
                <img src="${business.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${business.url}" target="_blank">
               <li class="text-dark"> 
              ${business.title}</li></a>
            </ul>
            </div>
            </div>
            `;
                    }
                    document.getElementById("sportSection").innerHTML = output;
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

});
