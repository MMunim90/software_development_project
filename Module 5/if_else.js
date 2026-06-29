var status = "rain";
var status = "hot";

// if(status == "rain"){
//     console.log("It's raining. We can't go out!!!");
// }
// else if(status == "hot"){
//     console.log("It's hot. We can't go out!!!")
// }
// else{
//     console.log("We can go out!!!")
// }



var result = 0;
if(result < 0 || result > 100){
    console.log("Wrong input");
}else if(result >= 0 && result < 33){
    console.log("You are failed");
}else if(result >= 33 && result < 40){
    console.log("You get grade C");
}else if(result >= 40 && result < 60){
    console.log("You get grade B");
}else if(result >= 60 && result < 70){
    console.log("You get grade A-");
}else if(result >= 70 && result < 80){
    console.log("You get grade A");
}else if(result >= 80 && result <= 100){
    console.log("You get grade A+");
}


