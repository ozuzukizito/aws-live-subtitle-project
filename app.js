const startBtn = document.getElementById("startBtn");

const japaneseText = document.getElementById("japaneseText");
const englishText = document.getElementById("englishText");

const recognition = new webkitSpeechRecognition();

recognition.lang = "ja-JP";
recognition.continuous = true;

startBtn.onclick = () => {
    recognition.start();
};

recognition.onresult = async (event) => {

    const transcript =
        event.results[event.results.length - 1][0].transcript;

    japaneseText.innerText = transcript;

    const response = await fetch(
    "https://a0lbuy1uel.execute-api.ap-northeast-1.amazonaws.com/prod/translate",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: transcript
        })
    }
);

const data = await response.json();

console.log(data);

englishText.innerText = data.english;
};