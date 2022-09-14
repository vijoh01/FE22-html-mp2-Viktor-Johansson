let title = ["Sushi med en touch av Skandinavien", "Bästa sushi platsen för dig", "Världens bästa sushi ställe", "Vi har öppet alla dagar"];

const element = document.querySelector('.info-title');

function displayTitle() {

    if (i < title.length) {
        element.innerHTML = title[i];
        i++;
    } else 
    i=0;
    
}

setInterval(displayTitle, 1500);
let i = 0;
console.log(element);