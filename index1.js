// to find the number of buttons under the class drum 
// document.querySelectorAll(".drum") this returns a array of buttons with drums
var butnum=document.querySelectorAll(".drum").length;

for(var i=0;i<butnum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}


document.addEventListener("keypress",function(event)
{
    var bt=event.key
    perform(bt);
    anime(bt);

})

function clicked(){
    // this keyowrd is used to use the clicked button . this gives the entire html line
    var bt=(this.innerHTML);
    anime(bt);
    perform(bt);
}



function perform(bt) {
    
    
    if(bt==='w'){
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    if(bt==='a'){
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    if(bt==='s'){
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    if(bt==='d'){
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    if(bt==='j'){
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
    if(bt==='k'){
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
    if(bt==='l'){
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    // instead of if else we can also use switch case statements 
}

function anime(currntbut){
    var act=document.querySelector("."+currntbut);
    // presses is a css anime already creted by angela 
    act.classList.add("pressed");

    setTimeout(function(){
        act.classList.remove("pressed")
    },100);
}









