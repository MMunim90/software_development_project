alert("This is munim's workspace")

// console.log(document.getElementsByTagName("h1"));

// const target = document.getElementsByClassName("title")
// console.log(target[0]);

const target = document.getElementById("title");

// console.log(target);

target.style.color = "red";

const allbox = document.getElementsByClassName("box");

console.log(allbox);

for(let i=0; i<allbox.length; i++){
    const element = allbox[i];
    // console.log(element)
    element.style.backgroundColor = "green";

    if(element.innerText == "box-5"){
        element.style.backgroundColor = "red";
    }
}


// document.getElementById("handleADD").addEventListener("click", (event)=>{
//     console.log("Hello Boss");
// })


const handleSearch = (event)=>{
    // console.log("Hello Boss");

    const inputValue = document.getElementById("search-Box").value;

    console.log(inputValue);
}