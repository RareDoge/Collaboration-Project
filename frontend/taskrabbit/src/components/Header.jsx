import { Link } from 'react-router-dom'

const Header = () => {

    const outline = {
        backgroundColor : "rgba(5, 16, 26, 0.8)",
        height: "100%",
        color: "white",
        width: "100%",
        gap: "60px",
        justifyContent: "space-between",
    }

    const textCSS = {
        fontFamily: "InterVariable, system-ui, sans-serif",
        textDecoration: "none",
        color: "white",
        padding: "10px",
        paddingLeft: "20px",
        fontSize: "30px",
    }

    const linkStyle = {
        fontFamily: "InterVariable, system-ui, sans-serif",
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        // border: "2px solid black",
        borderRadius: "20px",
        padding: "10px"
    }

    const navStyle = {
        display: "flex",
        gap: "30px",
        marginLeft: "auto",
        marginRight: "20px"
    }

    const button = {
        border: "5px solid white"
    }

    return (
        <header style={outline}>
            <nav style={navStyle}>
            <Link style={textCSS} to="/">TaskRabbit</Link>
            {/* <nav style={navStyle}> */}
                <div style={navStyle}>
                    <Link style={linkStyle} to="/">Home</Link>
                    <Link style={linkStyle} to="/TasksPage">Tasks</Link>
                    <Link style={linkStyle} to="/login">Login</Link>
                    <Link style={linkStyle} to="/SignUp">Sign Up</Link>
                </div>
            </nav>
            {/* </nav> */}
        </header>
    )
}

export default Header