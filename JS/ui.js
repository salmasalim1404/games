export class Ui {
    constructor(){}
    displayData(data){
        let cartona = "";
        for (let i = 0; i < data.length; i++) {
            
            cartona += `   <div  class="col-md-4 col-lg-3 ">
            <div class="card h-100 bg-transparent  role="button" data-id="${data[i].id}" " >
                <div class="card-body">
                    <figure class="position-relative">
<img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100" alt="">
                    </figure>
                    <figcaption>
                        <div class="hastack justify-content-between">
<h3 class="h6 small">${data[i].title}</h3>
<span class="text-bg-primary badge p-2">Free</span>
                        </div>
                        <p>${data[i].short_description.split("", 8)}</p>
                    </figcaption>
                </div>
                <footer class="card-footer small hastack justify-content-between">
<span class="badge badge-color">${data[i].genre}</span>
<span class="badge badge-color">${data[i].platform}</span>
                </footer>
            </div>
        </div>`
        }
        document.getElementById('rowData').innerHTML=cartona;
    }
    displayDetails(are){
     const   detailData = `    <div class="col-md-4">
        <img src="${are.thumbnail}" alt="" class="w-100">
      </div>
      <div class="col-md-8">
        <h3>Title : ${are.title} </h3>
        <p>Category : <span class="bange text-bg-info">${are.genre}</span></p>
        <p>Platform : <span class="bange text-bg-info">${are.platform}</span></p>
        <p>status : <span class="bange text-bg-info">${are.status}</span></p>
        <p class="small">  ${are.description}</p>
        <button class=" btn btn-outline-danger" target ="_blank" href="${are.game_url}"> Show Games</button>
      </div>`
      document.getElementById('detailscontent').innerHTML = detailData;
     
    }
    }