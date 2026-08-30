const StatusOptions = ({status, handleIssueChange}) => {
  return (
    <select
      className="status"
      name="status"
      value={status}
      onChange={handleIssueChange}
    >
      <option value="select">Select One...</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="In Review">In Review</option>
      <option value="Done">Done</option>
    </select>
  )
}

export default StatusOptions;
