const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15

function addDateTime(message) {
    return dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleString() + " " + message;
}

alert(addDateTime("This is the best moment to have a look at this website !"))