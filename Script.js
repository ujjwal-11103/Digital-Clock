
let myFunction = () => {
    const currentDate = new Date();
    //Time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    //Date
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let day = currentDate.getDay();
    let daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    console.log(`Current Date: ${date}:${month}:${year}`);

    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`
    document.getElementById("date").innerHTML = `${date} / ${month + 1} / ${year}`
    document.getElementById("day").innerHTML = `${daysOfWeekNames[day]}`
}
// myFunction()
const intervalId = setInterval(myFunction, 1000);
