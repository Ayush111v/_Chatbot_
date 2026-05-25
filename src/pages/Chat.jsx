import { useState } from 'react'

function Chat() {

  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: 'Hello'
    },
    {
      sender: 'bot',
      text: 'Hi! How can I help you?'
    }
  ])

  const handleSend = () => {

    if (message.trim() === '') {
      return
    }

    const newMessage = {
      sender: 'user',
      text: message
    }

    setMessages([...messages, newMessage])

    setMessage('')
  }

  return (
    <div style={styles.container}>

      <div style={styles.chatBox}>

        {messages.map((msg, index) => (
          <div
            key={index}
            style={
              msg.sender === 'user'
                ? styles.userMessage
                : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}

      </div>

      <div style={styles.inputArea}>

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handleSend}
          style={styles.button}
        >
          Send
        </button>

      </div>

    </div>
  )
}

const styles = {

  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#f2f2f2'
  },

  chatBox: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },

  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '300px'
  },

  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '300px'
  },

  inputArea: {
    display: 'flex',
    gap: '10px'
  },

  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px'
  },

  button: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }

}

export default Chat