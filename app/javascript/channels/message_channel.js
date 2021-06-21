import consumer from "./consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
  }
});

document.addEventListener("turbolinks:load", () => {
  let form = document.querySelector('#message-form')
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let messageInput = document.querySelector('#message-input').value
      if(messageInput == '') return;
      const message = {
        body: messageInput
      }
      messageChannel.send({message: message})
    })
  }
})