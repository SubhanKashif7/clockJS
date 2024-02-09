

setInterval(() => {
    let getDate = new Date;
    const hourH3 = document.querySelector("#h");
    const minuteH3 = document.querySelector("#m");
    const milliH3 = document.querySelector("#milli-i");
    let fullStr = getDate.toLocaleTimeString()
    let getHfromFullStr = fullStr.slice(0,2);
    let getMfromFullStr = fullStr.slice(3,5);
    let getMifromFullStr = fullStr.slice(6,8);

    hourH3.innerHTML = getHfromFullStr%12 + " " + ":";
    minuteH3.innerHTML = getMfromFullStr + " " + ":";
    milliH3.innerHTML = getMifromFullStr;
}, 1000); 