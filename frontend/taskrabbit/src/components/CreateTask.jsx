import StatusOptions from "./StatusOption"
const CreateTask = ({addIssue, newIssue, handleIssueChange}) => {
    return(
     <form onSubmit={addIssue}>
        <p>Create a New Issue:</p>
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          value={newIssue.title}
          onChange={handleIssueChange}
        />
        <label htmlFor="desc">Description: </label>
        <input name="desc" value={newIssue.desc} onChange={handleIssueChange} />
        <label htmlFor="status">Status: </label>
        <StatusOptions status={newIssue.status} handleIssueChange={handleIssueChange} />
        <label htmlFor="priority">Priority: </label>
        <input
          name="priority"
          value={newIssue.priority}
          onChange={handleIssueChange}
        />
        <button type="submit">Submit Issue</button>
      </form>
    )
}

export default CreateTask