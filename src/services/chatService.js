export const sendMessageToBot = async (message) => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve({
        sender: 'bot',
        text: `AI Reply for: ${message}`
      })

    }, 1000)

  })

}