// Code your solutions in this file
function writeCards(names, event = "birthday") {
    let occasion = event;
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(10);

