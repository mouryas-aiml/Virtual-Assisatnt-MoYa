const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 10;
    text_speak.pitch = 20;

    window.speechSynthesis.speak(text_speak);
    
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning MOURYA Sir...");
        speak("I'm Your Virtual Assistant MoYa. HOW CAN I HELP YOU MOURYA Sir");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon MOURYA Master...");
        speak("I'm Your Virtual Assistant MoYa. HOW CAN I HELP YOU MOURYA MASTER");
    } else {
        speak("Good Evening MOURYA ...");
        speak("I'm Your Virtual Assistant MoYa. HOW CAN I HELP YOU MOURYA");
    }
}

window.addEventListener('load', ()=>{
    speak("Initializing Your Virtual Assistant MoYa...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('Hey Virtual Assistant') || message.includes('Hello Virtual Assistant')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open telegram")) {
        window.open("https://mouryasstreamlinex.weebly.com/", "_blank");
        speak("Opening Telegram...");
    } else if (message.includes("open facebook")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('WhatsApp')) {
        window.open('WhatsApp:///');
        const finalText = "Opening WhatsApp";
        speak(finalText);
    } else if (message.includes('LinkedIn')) {
        window.open('LinkedIn:///');
        const finalText = "Opening LinkedIn";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Internet";
        speak(finalText); 
    }
}