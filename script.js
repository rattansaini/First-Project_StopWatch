// Declare variables to store time values and interval
let initialTime, currentTime, difference, timerInterval; 

// Boolean to track if the stopwatch is running or not
let isRunning = false; 

// Get references to the display and buttons from the DOM
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to start the timer
function startTimer() {
    // Check if the stopwatch is not already running
    if (!isRunning) { 
        initialTime = new Date().getTime(); // Record the current time when starting the stopwatch
        timerInterval = setInterval(updateTime, 1000); // Set an interval to update the time every second
        isRunning = true; // Mark the stopwatch as running
    }
}

// Function to stop the timer
function stopTimer() {
    // Check if the stopwatch is currently running
    if (isRunning) { 
        clearInterval(timerInterval); // Clear the interval to stop updating the time
        isRunning = false; // Mark the stopwatch as not running
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval); // Clear the interval to stop the timer if it's running
    isRunning = false; // Mark the stopwatch as not running
    display.textContent = "00:00:00"; // Reset the display to show "00:00:00"
}

// Function to update the time on the display
function updateTime() {
    currentTime = new Date().getTime(); // Get the current time
    difference = currentTime - initialTime; // Calculate the difference between the current time and the start time

    // Calculate hours, minutes, and seconds from the difference
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Calculate seconds

    // Format the time and update the display element
    display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" + // Add leading zero if needed for hours
        (minutes < 10 ? "0" : "") + minutes + ":" + // Add leading zero if needed for minutes
        (seconds < 10 ? "0" : "") + seconds; // Add leading zero if needed for seconds
}

// Add event listeners to buttons to trigger corresponding functions
startBtn.addEventListener('click', startTimer); // Start button
stopBtn.addEventListener('click', stopTimer); // Stop button
resetBtn.addEventListener('click', resetTimer); // Reset button
