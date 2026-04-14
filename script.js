// --- CONFIGURATION ---
// !!! IMPORTANT: Double-check this URL is correct and accessible !!!
const AUDIO_URL = "https://raw.githubusercontent.com/iexii/player/main/testt.mp3"; 
// ----------------------

// IMPORTANT: We wrap all the code in this event listener.
// This tells the browser: "DON'T RUN ANYTHING YET. Wait until the entire page is ready."
document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize WaveSurfer.js
    const wavesurfer = WaveSurfer.create({
        el: 'waveform', // Must match the ID in your HTML
        waveColor: '#00bcd4', 
        progressColor: '#ff5722', 
        cursorColor: '#ff5722', 
        barWidth: 1.5, 
        height: 100 
    });

    // 2. Load the audio file
    wavesurfer.load(audioUrl); 
});
