// --- CONFIGURATION ---
// !!! IMPORTANT: Use the URL to your uploaded MP3 file !!!
// Example: "https://yourusername.github.io/sample-player-audio/stellar-drift.mp3"
const AUDIO_URL = "stellar-drift.mp3"; 
// ----------------------

// Initialize WaveSurfer.js
const wavesurfer = WaveSurfer.create({
    el: 'waveform', 
    waveColor: '#00bcd4', 
    progressColor: '#ff5722', 
    cursorColor: '#ff5722', 
    barWidth: 1.5, 
    height: 100 
});

// Load the audio file
wavesurfer.load(AUDIO_URL);
