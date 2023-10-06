
window.SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition()
let textbox = $("#text_box")
let content = ""
recognition.continuous = true
let counter = $("#counter")


recognition.onstart = function () {
    counter.text("voice recognition is on")
}

recognition.onspeechend = function () {
    counter.text("no activity")

}
recognition.onerror = function () {
    counter.text("try again")
}

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript
    content += transcript
    textbox.val(content)
}

$(".btn").click(function (event) {
    if (content.length) {
        content+=''
    }
    recognition.start()

})

textbox.on('input', function () {
    content=$(this).val
})