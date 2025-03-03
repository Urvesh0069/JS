let numbers = 0;

function start() {
    count = setInterval(() => {
        numbers++;
        document.getElementById('count').innerHTML = numbers;
    },100); 
}

function stop() {
    clearInterval(count);
}

function reset() {
    stop();
    numbers = 0;
    document.getElementById('count').innerHTML = numbers;
}
