var players = document.getElementById("players");

for (var i = 0; i < p_data.length; i++) {
  players.innerHTML +=
    `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 px-4 px-md-3">
      <div class="card shadow h-100">
        <img src="`+ p_data[i].image + `" class="card-img-top p-2">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-semibold text-center">`+ p_data[i].name + `</h5>
          <p class="card-text mb-2 mx-2">Jersey Number: `+ p_data[i].number + `</p>
          <p class="card-text mb-2 mx-2">Position: `+ p_data[i].position + `</p>
          <p class="card-text mx-2">Height: `+ p_data[i].height + `</p>
          <a href="`+ p_data[i].stats + `" class="btn btn-primary rounded border-2 stats-btn" target="_blank">
            View Stats<i class="bi bi-clipboard-data ms-2"></i>
          </a>
        </div>
      </div>
    </div>
    `;
}

var champ_journey = document.getElementById("champ_journey");

for (var i = 0; i < po_data.length; i++) {
  champ_journey.innerHTML +=
    `
    <div class="col-12 col-md-6 col-lg-4">
       <div class="card shadow h-100">
         <img src="`+ po_data[i].image + `" class="p-2">
         <div class="card-body">
           <p class="card-text px-2" style="text-align:justify;">
             `+ po_data[i].desc + `
           </p>
         </div>
       </div>
    </div>
    `;
}