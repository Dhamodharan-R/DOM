/* Title */
const title = document.querySelector('title');
title.innerText ='RestCountries using Javascript';

/* XMLHttpRequest  */
var req =new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all');
req.send();
req.onload = function(){
var data = JSON.parse(this.response);
console.log(data);

 /* navbar */   
const navbar =document.createElement('div');
navbar.className = 'navbar';
navbar.innerHTML = 
`<h1 class ='heading'>Where in the world?</h1>
 <h2 class='heading'>Dark Mode</h2>
`
document.body.append(navbar);

/* search bar */
const searchbar =document.createElement('div');
searchbar.className = 'searchbar';
searchbar.innerHTML = 
`<input class='searchbar' type='text' placeholder='Search for a country...'>
`
document.body.append(searchbar);

const container = document.createElement('div');
container.className ='container';
document.body.append(container);
/* Looping  */

data.forEach(x => {

const dataContainer = document.createElement('div')
dataContainer.className = 'dataContainer';
dataContainer.innerHTML =`

<img class='image' src=${x.flag}>
<div class='contentdiv'>
<h2>${x.name}</h2>
<p><span>Population :</span> ${x.population}</P>
<p><span>Region :</span> ${x.region}</P>
<p><span>Capital :</span> ${x.capital}</P>
</div>`
container.append(dataContainer);
    
});


   
    
    

}


/* var length = data.length; */

/* for(i=0;i<10;i++){
    createFlag();   
} */

/* function createFlag (){
const dataContainer = document.createElement('div')
dataContainer.className = 'dataContainer';
dataContainer.innerHTML =`

<img class='image' src='https://restcountries.eu/data/afg.svg'>
<div class='contentdiv'>
<h2>Germany</h2>
<p><span>Population :</span> 777777777</P>
<p><span>Region :</span> Europe</P>
<p><span>Capital :</span> Berlin</P>

</div>
</div>`
container.append(dataContainer);
} */


