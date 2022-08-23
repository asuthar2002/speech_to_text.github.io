let text = document.getElementById("text");
const start = document.getElementById("start");
const stop = document.getElementById("stop");


let userAgent = navigator.userAgent;

if(userAgent.match(/chrome|chromium|crios/i))
{
    text.innerText = "Press start button .";
}
 else {
    text.innerText = "Your Brower don't Support this feature. This is only Supported by chrome browser.";
}


// initilized a speech to text feature;

// Interim results are results that are not yet final. If you enable this property,
// the speechRecognition object will also return the interim results
//  along with the final results. Let’s set it to true.

let final_script = "";
window.SpeechRecognition = window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();

speechRecognition.continuous = true;

speechRecognition.interimResults = true;

// speech.lang = document.querySelector("#select_dialect").value;
speechRecognition.lang = "en-IN";

speechRecognition.onerror = () => {
  start.innerText = "Unable to recongnised , Please restart ";
  console.log("error...");
};

// on result event in js
//The onresult property of the SpeechRecognition interface represents an event handler that will run when the speech recognition
//service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app
speechRecognition.onresult = async (event) => {
  
  let current = event.resultIndex;

  let transcript = event.results[current][0].transcript;
  final_script +=transcript;
  text.innerText = final_script;
};

start.addEventListener("click", () => {
  start.innerText = "Listening...";
  text.innerText = "";
  speechRecognition.start();
});

stop.addEventListener("click", () => {
  start.innerText = "Start";
  speechRecognition.stop();
});
