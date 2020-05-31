window
  .fetch('https://api.covid19api.com/summary')
  .then((data) => {
    data
      .json()
      .then((covid) => {
        console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById('covidBlock').innerHTML = `
          <section>
           <div>
          <h4 class="badge badge-danger">Total Confirmed</h4>
          <span>${Global.TotalConfirmed}
          </div>

          <div>
          <h4 class="badge badge-danger">Total Deaths</h4>
          <span>${Global.TotalDeaths}
          </div>

           <div>
          <h4 class="badge badge-danger">New Confirmed</h4>
          <span>${Global.NewConfirmed}
          </div>

          <div>
          <h4 class="badge badge-danger">New Deaths</h4>
          <span>${Global.NewDeaths}
          </div>

          <div>
          <h4 class="badge badge-success">New Recovered</h4>
          <span>${Global.NewRecovered}
          </div>

           <div>
          <h4 class="badge badge-success">Total Recovered</h4>
          <span>${Global.TotalRecovered}
          </div>
 
          </section>
          `;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
