const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'Skupeedee',
    'Yeah bitch, magnets! Oh!',
    'Hello Mr.Wick'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('Voice is activated, speak brah');
};

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

readOutLoud = (message) => {
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'Yeah bitch, magnets! Oh!';

    if (message.includes('hello')) {
        const fText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = fText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}