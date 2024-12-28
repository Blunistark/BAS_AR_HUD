// Access the device camera with higher resolution settings
navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: "environment",  // Rear camera
        width: { ideal: 1920 },     // Ideal width for high-definition
        height: { ideal: 1080 },    // Ideal height for high-definition
        frameRate: { ideal: 30 },   // Frame rate for smooth video
        facingMode: 'environment'  // Ensures the rear camera is used
    }
})
.then(function(stream) {
    const video = document.getElementById('background-video');
    video.srcObject = stream;
    video.play();  // Make sure the video starts playing
})
.catch(function(error) {
    console.log('Error accessing camera: ', error);
});

// Voice Assistant using the Web Speech API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = false;
recognition.interimResults = false;

// Start voice recognition when the page loads
recognition.start();

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log('Voice command received:', command);

    // Check for specific voice commands
    if (command.includes('night vision')) {
        enableNightVision();
    } else if (command.includes('thermal vision')) {
        enableThermalVision();
    } else {
        console.log('Command not recognized.');
    }
};

// Handle errors
recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
};

// Apply Night Vision Effect (change scene color to greenish)
function enableNightVision() {
    console.log('Night Vision Enabled');
    const sky = document.getElementById('skybox');
    sky.setAttribute('material', 'color', '#001100');  // Dark greenish tone for night vision effect
    sky.setAttribute('material', 'opacity', '0.7');    // Make the scene a bit darker
}

// Apply Thermal Vision Effect (using color gradient to simulate thermal vision)
function enableThermalVision() {
    console.log('Thermal Vision Enabled');
    const sky = document.getElementById('skybox');
    sky.setAttribute('material', 'color', '#ff0000');  // Red for thermal vision
    sky.setAttribute('material', 'opacity', '0.9');    // Increase visibility for thermal effect
}
