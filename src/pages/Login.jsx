import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    
    <div style={styles.container}>
      <div style={styles.card}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button
          style={styles.button}
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },

  card: {
    width: '300px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },

  input: {
    padding: '10px',
    fontSize: '16px'
  },

  button: {
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
}

export default Login
