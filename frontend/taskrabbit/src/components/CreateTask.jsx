import StatusOptions from "./StatusOption"
import Priority from "./Priority"
const CreateTask = ({addIssue, newIssue, handleIssueChange}) => {
    return(
      <div className="new-task-form">
        <form onSubmit={addIssue}>
            <p>Create a New Issue:</p>
            <div className="test">
              <label htmlFor="title">Title: </label>
              <input
                id="title"
                name="title"
                value={newIssue.title}
                onChange={handleIssueChange}
                placeholder="Task Name"
              />
            </div>
            <div className="test">
              <label htmlFor="desc">Description: </label>
              <input 
                id="desc"
                name="desc"
                value={newIssue.desc}
                onChange={handleIssueChange}
                placeholder="Task Description"
              />
              <StatusOptions
                status={newIssue.status}
                handleIssueChange={handleIssueChange}
              />
            </div>
            <div className="test">
              <label htmlFor="priority">Priority: </label>
              <Priority priority={newIssue.priority} handleIssueChange={handleIssueChange}/>
            </div>
            <button className="submit-task" type="submit">Submit Issue</button>
          </form>
      </div>
    )
}

export default CreateTask