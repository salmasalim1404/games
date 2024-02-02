import { Ui } from "./ui.js";

export class Details {
constructor(id){
document.getElementById('btnClose').addEventListener('click' , ()=> {
    document.getElementById('details').classList.add('d-none');
    document.getElementById('games').classList.remove('d-none');
    
})
this.detailsFromApi(id)
}
async detailsFromApi(id){
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f4ff7d2139mshab731ced3af51acp1e63f2jsn62c255d8e8dc',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
 const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options);
 const response =await api.json();
 console.log(response); 
 new Ui().displayDetails(response)   

}

}