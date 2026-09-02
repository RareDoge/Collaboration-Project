const Priority = ({priority, handleIssueChange}) => {
    return(
        <select
        id="priority"
        name="priority"
        onChange={handleIssueChange}
        defaultValue={"Priority Level"}
        required
        >
            <option value="" defaultValue={"test"} hidden>Select Priority Level...</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
    )
}

export default Priority