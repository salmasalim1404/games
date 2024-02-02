import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home {
    constructor(){
  document.querySelectorAll('.nav-link').forEach( link =>{
    link.addEventListener('click' ,() => {
    this.changeActive(link);
    const category = link.getAttribute('data-category');
    this.getData(category)
    })
  })
  this.details = document.getElementById('details');
  this.games = document.getElementById('games');
  this.loading = document.querySelector('.lds-ring')
  this.ui = new Ui();

  this.detailsSec = new Details()
  this.getData('MMORPG')
    }
   async changeActive(link){
    document.querySelector('.navbar-nav .active').classList.remove("active");
    link.classList.add("active");
//     const category = link.getAttribute('data-category');
//  //    const category = link.dataset.category;
//     console.log(category);
//    const categoryData =await this.getData(category);
//    this.ui.displayData(categoryData)

    }
    async getData(cat){

this.loading.classList.remove('d-none')

        const option = {
            method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4ff7d2139mshab731ced3af51acp1e63f2jsn62c255d8e8dc',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , option);
        const response = await api.json();
        this.loading.classList.add('d-none')
        console.log(response);
        this.ui.displayData(response)
        document.querySelectorAll('.card').forEach( card => {
          card.addEventListener('click' ,() => {
            this.details.classList.remove('d-none');
            this.games.classList.add('d-none');
            new Details(card.dataset.id)
            
          })
        })
    }
}