
let entertainment1 = document.getElementById("entertainment");
entertainment1.addEventListener("click", (e) => {
    e.preventDefault();

    let entertainmentApi = "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0ec47830123e455f88d7aa650d7060cc";

    window.fetch(entertainmentApi)
        .then((entertainmentData) => {
            entertainmentData.json()
                .then(entertainments => {
                    let entertainmentInfo = entertainments.articles;

                    let output = [];
                    for (let entertainment of entertainmentInfo) {
                        output += `
            <div class="row">
            <div class="col-md-8">
                <img src="${entertainment.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${entertainment.url}" target="_blank">
               <li class="text-dark"> 
              ${entertainment.title}</li></a>
            </ul>
            </div>
            </div>
            
            `;
                    }
                    document.getElementById("sportSection").innerHTML = output;
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

});
