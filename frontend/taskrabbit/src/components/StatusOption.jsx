const StatusOptions = ({status, handleIssueChange}) => {
  return (
    <div className="test">
      <label htmlFor="status">Status:</label>
      
      <select
        id="status"
        name="status"
        className="status"
        onChange={handleIssueChange}
        defaultValue={"Select One..."}
        required
      >
        <option value="select" hidden>Select One...</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="In Review">In Review</option>
        <option value="Done">Done</option>
      </select>
    </div>
  )
}

export default StatusOptions;
