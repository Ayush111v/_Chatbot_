function MessageBubble({ sender, text }) {

  return (
    <div
      style={
        sender === 'user'
          ? styles.userMessage
          : styles.botMessage
      }
    >
      {text}
    </div>
  )
}

const styles = {

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
  }

}

export default MessageBubble