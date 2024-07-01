async function getpizza(){
  const response=await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
const data= await response.json();
const pizza=data.recipes;
const result= pizza.map(function(ele){
return `
<div class='pizza'>
<h2>${ele.title}</h2>
<img src='${ele.image_url}'>
</div>
`;
}).join('');
document.querySelector(".pizza").innerHTML=result;}
getpizza();
