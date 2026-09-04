import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {
    const [formData, setFormData] = useState({email: '', password: ''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)

        try{
            console.log('1. Inside LOGINPAGE Step 1')
            const data = await axios.post('http://localhost:3001/api/login',
                formData,
                {withCredentials: true}
                )
            console.log('2. login page step 2')
            console.log('Logged in:', data.email)
            navigate('/TasksPage')

        } catch (error) {
            console.log('error', error)
            setError('Server error, please try again')
        } finally {
            setLoading(false)
        }
    }

    const pageWrapper = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"

    }

    const formLayout = {
        gap: "10px",
        height: "40vh",
        alignContent: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "5px solid black",
        borderRadius: "10px",
        padding: "30px",
        background: "#f6f6f6"
    }

    const inputStyle = {
        width: "350px",
        padding: "15px",
    }

    const submitStyle = {
        width: "150px",
        background: "#27AE60",
        fontWeight: "bold",
        color: "white",
        border: "0 none",
        borderRadius: "1px;",
        cursor: "pointer",
        padding: "10px",
        textDecoration: "none",
        fontSize: "15px",

    }

    return (
        <div className='login-wrapper' style={pageWrapper}>
            <h1>Login Page</h1>
            <form style={formLayout} onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    type='email' 
                    placeholder='Sample@email.com'
                    style={inputStyle}
                    value={formData.email}
                    onChange={handleChange}
                    required
                ></input>
                <input 
                    style={inputStyle} 
                    name="password" 
                    type='password' 
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                ></input>
                <button style={submitStyle} type='submit' disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    )
}

export default LoginPage