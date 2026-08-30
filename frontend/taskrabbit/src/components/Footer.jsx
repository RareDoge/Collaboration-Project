const Footer = () => {

    const footerStyle = {
        marginTop: "10px",
        backgroundColor: "rgb(2, 57, 113)",
        minHeight: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    }

    return (
        <footer style={footerStyle}>
            <h3>© 2026 RareDoge's Site | All Rights Reserved</h3>
        </footer>
    )
}

export default Footer