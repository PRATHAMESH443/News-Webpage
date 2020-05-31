
let technology1 = document.getElementById("technology");
technology1.addEventListener("click", (e) => {
    e.preventDefault();

    let technologyApi = "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=0ec47830123e455f88d7aa650d7060cc";
    window.fetch(technologyApi)
        .then((technologyData) => {
            technologyData.json()
                .then(technologies => {
                    let technologyInfo = technologies.articles;

                    let output = [];
                    for (let technology of technologyInfo) {
                        output += `
             <div class="row">
            <div class="col-md-8">
                <img src="${technology.urlToImage}" class="enterImg" />
            </div>
            <div class="col-md-4">
            <ul class="list-group">
             <a href="${technology.url}" target="_blank">
               <li class="text-dark"> 
              ${technology.title}</li></a>
            </ul>
            </div>
            </div>
            `;
                    }
                    document.getElementById("sportSection").innerHTML = output;
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

});
