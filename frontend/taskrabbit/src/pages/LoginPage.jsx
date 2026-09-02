import React from 'react'

const LoginPage = () => {


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
            <form style={formLayout}>
                <input 
                    name="email" 
                    type='email' 
                    placeholder='Sample@email.com'
                    style={inputStyle}
                ></input>
                <input 
                    style={inputStyle} 
                    name="password" 
                    type='password' 
                    placeholder='Password'
                ></input>
                <button style={submitStyle}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage