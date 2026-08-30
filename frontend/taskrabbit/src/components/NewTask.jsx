import CreateTask from "./CreateTask"
import Issue from "./Issue"

const NewTask = (props) => {

    const popUp = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const popUpInner = {
        position: "relative",
        padding: "32px",
        height: "500px",
        width: "350px",
        maxWidth: "640px",
        backgroundColor: "rgba(251, 14, 14, 0.75)",
        borderRadius: "10px"
    }

    const buttonStyle = { 
        position: "absolute",
        top: "16px",
        right: "16px",
        fontWeight : "bold"
    }

    return(props.trigger) ? (
        <div className="popup" style={popUp}>
            <div style={popUpInner}>
                <button style={buttonStyle} onClick={() => props.setNewTask(false)}>Close</button>
                    <CreateTask
                    addIssue={props.addIssue}
                    newIssue={props.newIssue}
                    handleIssueChange={props.handleIssueChange}
                    />
            </div>
        </div>
    ) : ""
}

export default NewTask