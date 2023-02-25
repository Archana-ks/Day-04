//Rest countries flags
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
v=(result);
for(let i of v){
    console.log(i.flags)
}
}




// Rest countries names,regions, sub region and  populations
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
v=result;
for(let i of v){
    console.log(i.name.common);
    console.log(i.population);
    console.log(i.region);
    console.log(i.subregion);
}
}