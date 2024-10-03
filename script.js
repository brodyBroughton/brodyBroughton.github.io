function start(){
    //playBackgroundMusic();
}
function playBackgroundMusic() {
    var audio = new Audio('https://www.myinstants.com/media/sounds/rick-roll.mp3');
    audio.loop = true;
    audio.play();
}
window.onload = function() {
    playBackgroundMusic();
};
function getFortune() {
    // create a list of random fortunes
    const fortunes = [
        "Diddy is waiting to oil you up",
        "You will see drake in the near future",
        "Fanum will tax you soon",
        "Skibidi toilet blesses you",
        "You can see baby gronk rizz livvy dunne in ohio tomorrow",
        "Michael Jacksoon will GYATT all over you",
        "Kai cenat will glaze you ong",
        "You will mog everyone soon if you mewmaxx",
        "Epstein will take you on an exotic vacation"
    ];
    
    // select a random value from the `fortunes` array
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    // post an alert that displays the random fortune
    alert(fortunes[randomIndex]);
}