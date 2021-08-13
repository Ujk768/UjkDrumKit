//checks for button click ans then sends to make sound to play relevant sound
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    }
    );
}
//checks for key press and then sends to make sound to play relevant sound
//in keydown event there is a property "key" which shows us the key we pressed 
document.addEventListener("keydown",function(event){
    //this event has a property key which tells us the key pressed
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default: console.log(key);

    }
}

function buttonAnimation(currentKey){
    var activeKeyPressed=document.querySelector("."+currentKey);
    activeKeyPressed.classList.add("pressed");
    setTimeout(function(){
        activeKeyPressed.classList.remove("pressed");
    },100);
}