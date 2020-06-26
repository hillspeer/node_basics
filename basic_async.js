const fetchData = callback => {
    setTimeout( () => {
        callback('Done!');
    }, 1500)
}

setTimeout( () => {
    console.log("Timer done!");
    fetchData(text => {
        console.log(text);
    });
}, 0);

console.log("Hello");
console.log("Hi");