

// var mydata = JSON.parse(data);
// console.log(mydata);


function getdata() {
   console.log("hiiii"); 
fetch('./javascript-coding-challenge-fetch-and-table-l2z6s56k1e-exercise-2.json')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    // document.getElementById("app").innerHTML+=data.map((item)=>{
    //     return `<td>${item.title}</td>`

    // })
})
.catch((err) => {
    console.log(err);
  });
}
getdata()

