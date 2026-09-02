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
        alignItems: "center",
        backgroundColor: "rgb(80, 80, 80, 0.7)"
    }

    const popUpInner = {
        position: "relative",
        padding: "32px",
        height: "500px",
        width: "350px",
        maxWidth: "640px",
        backgroundColor: "rgb(255, 253, 253)",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgb(150, 145, 145)"
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
                <button className={"close-task"}  style={buttonStyle} onClick={() => props.setNewTask(false)}>Close</button>
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