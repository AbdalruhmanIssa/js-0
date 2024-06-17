var data="";
var arr=["c++","javascript","python"];
for(var i= 0;i <3; i++){
  data+=`<li>${arr[i]}</li>`;
} 
document.querySelector("ul").innerHTML=data;