const Priority = ({priority, handleIssueChange}) => {
    return(
        <select
        name="priority"
        value={priority}
        onChange={handleIssueChange}
        required>
            <option value="" disabled selected hidden>Select Priority Level...</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
    )
}

export default Priority