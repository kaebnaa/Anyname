// X 2 orontoi toonii aravtin oron negjin ornig hoorond n urjuuleh

// Toirogiin talbaig ol

// Tegsh untsugtiin diognaliig ol

// Decrease, Reset, increase counter!!!

// 100 hurtelh toonii buh tegsh toog zaigaar tusgaarlan hevle

// 3 toonii ihiig ol 


// const input = document.querySelector("#numInput");
// const input2 = document.querySelector("#numInput2");
// const btn = document.querySelector("#btn");
// const field = document.querySelector("#field");

// btn.addEventListener("click", ()=>{
//     field.innerHTML = Number(input.value) + Number(input2.value);
// })

// let x = 75;
// let aravt = x/10;
// console.log(parseInt(aravt));

// Math.pow(x,2);
// Math.sqrt(x);

// const field = document.querySelector("#count");
// const dec = document.querySelector("#dec");
// const res = document.querySelector("#res");
// const inc = document.querySelector("#inc");

// // window.addEventListener("keyup", (e)=>{
// //     if(e.key == "Enter"){
// //         alert("hello")
// //     }
// // })

// let count = 0;


// dec.addEventListener("click", ()=>{
//     if(count>0){
//         count -= 1;
//         field.innerHTML = count;
//     }
//     else{
        
//     }
// })
// res.addEventListener("click", ()=>{
//     count = 0;
//     field.innerHTML = count;
// })
// inc.addEventListener("click", ()=>{
//     count += 1;
//     field.innerHTML = count;
// })

// document.querySelector(".cards").innerHTML = document.querySelector(".card");
// console.log(hereos[0])

function renderIron(){
    hereos.forEach(e => {
        document.querySelector(".cards").innerHTML += `
        <div class="card">
            <img src="${e.image}" alt="" width="100%" height="80%">
            <p>Name : ${e.name}</p>
            <p>Realname : ${e.realname}</p>
        </div>
        `
    })
}
renderIron();