import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [userData, setUserData] = useState({username: '', email: '', password: ''})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const pageWrapper = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"

    }

    const formLayout = {
        gap: "10px",
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

    const handleFormChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

         try {
            axios.post('http://localhost:3001/api/register',
                userData,
            {withCredentials: true})
            console.log('successfully created user. re-routing to tasks')
            navigate('/TasksPage')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
    }

    }


    return (
        <div className='login-wrapper' style={pageWrapper}>
            <h1>Sign Up</h1>
            <form style={formLayout} onSubmit={handleSubmit}>
                <input 
                    name="email" 
                    type='email' 
                    placeholder='Sample@email.com'
                    style={inputStyle}
                    onChange={handleFormChange}
                ></input>
                <input 
                    name="username" 
                    type='usernmae' 
                    placeholder='Username'
                    style={inputStyle}
                    onChange={handleFormChange}
                ></input>
                <input 
                    style={inputStyle} 
                    name="password" 
                    type='password' 
                    placeholder='Password'
                    onChange={handleFormChange}
                ></input>
                <button style={submitStyle}>{loading ? "Loading..." : "Register"}</button>
            </form>
        </div>

    )
}

export default SignUp