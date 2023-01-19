//1st step: create a XHR object
var request = new XMLHttpRequest();
//2nd Step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v3.1/all");
//3rd step:establishing the bridge
request.send();
//4th step: once the data successfully received from server
//onload is an event
//when we use: once the data /server is showing 200 status code 
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
}