
let baseURL = "https://api.tvmaze.com/shows";
let dataContainer = document.querySelector('#data-container');

fetch(baseURL)
  .then(response => response.json())
  .then(datas => {
    datas.forEach(data => {
        dataContainer.innerHTML += 
        ` <div class="card" style = "width: 18rem">
        <img src="${data.image?.medium}" class="card-img-top" style="width: 286px; height:432px" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Premiere: ${data.premiered}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
            <li class="list-group-item">Genre: ${data.genres}</li>
            <li class="list-group-item">Language: ${data.language}</li>
        </ul>
        <div class="card-body-btn ">
            <a href="${data.officialSite}" class="btn btn-primary" >Go to website</a>
            <a href="./goto.html?id=${data.id}" class="btn btn-success" target="_blank">Go to Detail</a>
        </div>
    </div>
</div>`
    })
  })




const datas = new URLSearchParams(window.location.search);
const id = datas.get("id");
let dataContainergoto = document.querySelector("#data-containergoto")
fetch(`https://api.tvmaze.com/shows/${id}`)
  .then(response => response.json())
  .then(data => {
    dataContainergoto.innerHTML +=
      `<div class=">
        <div class="card row " style="display: flex;">
        <img src="${data.image.original}" class="card-img-top" style="width: 300px; height:449px" alt="...">
            <div class="card-body" style="display: flex; margin-left:30px" >
                <h2 style="margin-left:30px">${data.name}</h2>
                <p >${data.summary}</p>
                <ul style="margin-left:20px">
                <li>IMDB: ${data.rating.average}</li>
                <li>Language: ${data.language}</li>
                <li>Genre: ${data.genres}</li>
                <li>Premiered: ${data.premiered}</li>
                <li>Ended: ${data.ended}</li>
                </ul>
                <div class="d-flex ">
                 <a href="${data.officialSite}"  class="btn btn-primary"  style="padding: 5px 30px; margin-left:25px ">Go to website</a>
                 <a href="./index.html" class="btn btn-success" style="padding: 5px 30px; margin-left:25px ">Go Back</a>
            </div>
            </div>
        </div>
    </div>
    `
  });



