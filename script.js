let numbers = [];

function addNumber() {
    const numInput = document.getElementById("numInput");
    const value = numInput.value.trim();
    if (value !== "" && !isNaN(value)) {
        numbers.push(Number(value));
        numInput.value = "";
        displayNumbers();
    }
}

function resetAll() {
    numbers = [];
    document.getElementById("numberList").innerHTML = "";
    document.getElementById("resultBox").innerHTML = "";
    document.getElementById("numInput").value = "";
}

function displayNumbers() {
    const list = document.getElementById("numberList");
    list.innerHTML = "";
    numbers.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        list.appendChild(li);
    });
}

function calculateMean() {
    if (numbers.length === 0) return;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    const mean = sum / numbers.length;
    document.getElementById("resultBox").innerHTML = `<h3>Mean = ${mean.toFixed(2)}</h3>`;
}

function calculateMedian() {
    if (numbers.length === 0) return;
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    let median;
    if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
    }
    else {
        median = sorted[mid];
    }
    document.getElementById("resultBox").innerHTML = `<h3>Median = ${median}</h3>`;
}

function calculateMode() {
    if (numbers.length === 0) return;
    const freq = {};
    numbers.forEach((n) => {
        freq[n] = (freq[n] || 0) + 1;
    });

    let maxFreq = 0;
    let mode = [];
    for (let n in freq) {
        if (freq[n] > maxFreq) {
            maxFreq = freq[n];
            mode = [n];
        }
        else if (freq[n] === maxFreq) {
            mode.push(n);
    }
}

    const resultBox = document.getElementById("resultBox");
    if (mode.length === Object.keys(freq).length) {
        resultBox.innerHTML = "<h3>Mode = No mode (all numbers appear equally)</h3>";
    }
    else {
        resultBox.innerHTML = `<h3>Mode = ${mode.join(", ")}</h3>`;
    }
}