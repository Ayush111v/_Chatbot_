function Register() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter username"
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Enter email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter password"
          style={styles.input}
        />

        <button style={styles.button}>
          Register
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
    gap: '15px'
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

export default Register