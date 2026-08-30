const Footer = () => {

    const footerStyle = {
        marginTop: "200px",
        backgroundColor: "rgb(2, 57, 113)",
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        left: "0",
    }

    return (
        <footer style={footerStyle}>
            <h3>© 2026 RareDoge's Site | All Rights Reserved</h3>
        </footer>
    )
}

export default Footer