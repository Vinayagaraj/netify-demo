//XML-HTTP request
//HOw to extract the data form the api
//How we can use that information

//XML-HTTP request are used to interact with the sever VIA api
// 4 steps are involved in  the creating of XML_HTTP reuest object

//1st : create a XHR object
var request = new XMLHttpRequest();
//2nd step : sending a request
request.open("GET","https://restcountries.com/v3.1/all")
//request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
//3rd step
request.send();
//4th : sending a request  

request.onload =function() {
var res = JSON.parse(request.response)
console.log(res)

//console.log(res[0].population)

// for(var i=0;i<res.length;i++){
//     console.log(res[i].name.common)
// }
// for(var i=0;i<res.length;i++){
//     console.log(res[i].name.common,res[i].region)
//     }
//1.print all the countries name in the array
//Expected output : ["Jordan", :"Indonasia"...]
var final_data = res.map((ele)=>ele.name.common)
console.log(final_data);
//2.Print the countries nmaes in the array which belongs to Asia regions
var ele_asia = ele_asia.map((ele)=>ele.region === "Asia")
console.log(ele_asia)

var res_data
}