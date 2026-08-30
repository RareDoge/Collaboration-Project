const Header = () => {

    const outline = {
        backgroundColor : "rgba(5, 16, 26, 0.8)",
        height: "100%",
        display: "flex",
        color: "white",
    }

    const textCSS = {
        padding: "10px",
        paddingLeft: "20px",
        margin: "0",
        fontSize: "30px"
    }

    const linkStyle = {
        textDecoration: "none",
        color: "inherit"
    }

    return (
        <div style={outline}>
            <a href="" style={linkStyle}>
                <h3 style={textCSS}>TaskRabbit</h3>
            </a>
        </div>
    )
}

export default Header