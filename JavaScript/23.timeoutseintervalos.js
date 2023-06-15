setTimeout(() => {
    console.log("Hola")
}, 3000);

setInterval(() => {
    const date = new Date();
    const clock = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log(clock)
}, 1000);