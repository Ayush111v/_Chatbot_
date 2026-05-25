import API from './api'

export const sendMessageToBot = async (message) => {

  try {

    const response = await API.post('/chat/send', {
      message: message
    })

    return {
      sender: 'bot',
      text: response.data.reply
    }

  } catch (error) {

    return {
      sender: 'bot',
      text: 'Error connecting to server'
    }

  }

}