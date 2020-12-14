let recognition

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command === 'message-box') {
      const tb = document.getElementById("post_textbox")
      if (!recognition) {
        recognition = new webkitSpeechRecognition();
        recognition.interimResults = true;
      }
      let oldValue

      recognition.onend = () => {
        tb.value = tb.placeholder
        tb.placeholder = ""
        tb.focus();
      }

      recognition.onstart = () => {
        oldValue = tb.value;
        let wtb = document.querySelector('[data-testid="post_textbox_placeholder"]');
        if (wtb) {
          wtb.innerHTML = "";
        }
        tb.placeholder = tb.value
        tb.value = ""
      }

      recognition.onresult = (event) => {
        for (const res of event.results) {
          tb.placeholder = (oldValue ? oldValue + " " : oldValue) + res[0].transcript;
        }
      }

      recognition.start();
    }
  }
);
