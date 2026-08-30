import { useState, useEffect } from "react"
import axios from "axios"
import issueService from "./services/issues"
import Issue from "./components/Issue"
import StatusOptions from "./components/StatusOption"
import CreateTask from "./components/CreateTask"

const App = (props) => {
  const [issues, setIssues] = useState([])
  const [newIssue, setNewIssue] = useState({
    title: "",
    desc: "",
    status: "",
    priority: "",
  });

  useEffect(() => {
    const loadIssues = (initialIssues) => {
      setIssues(initialIssues)
    }
    issueService.getAll().then(loadIssues)
  }, [])

  const addIssue = (event) => {
    event.preventDefault()

    const issueObject = {
      title: newIssue.title,
      desc: newIssue.desc,
      status: newIssue.status,
      priority: newIssue.priority,
    };

    axios
      .post("http://localhost:3001/api/issues", issueObject)
      .then((result) => {
        setIssues(issues.concat(result.data))
      })
      .catch((error) => {
        console.error("Error creating issue:", error)
        alert("Failed to create issue. Please try again.")
      })

    setNewIssue({
      title: "",
      desc: "",
      status: "",
      priority: "",
    })
  }

  const handleIssueChange = (event) => {
    const { name, value } = event.target
    setNewIssue({
      ...newIssue,
      [name]: value,
    })
  }

  const issueToDo = issues.filter(issue => issue.status == "To Do")
  const issueInProgress = issues.filter(issue => issue.status == "In Progress")
  const issueDone = issues.filter(issue => issue.status == "Done")

  return (

    <div>
      <div>
      <h1>TASKS</h1>
        <CreateTask
          addIssue={addIssue}
          newIssue={newIssue}
          handleIssueChange={handleIssueChange}
        />
      </div>

      {/* List all issues
       <ul>
        {issues.map((issue) => (<Issue key={issue.id} issue={issue} />))}
      </ul> */}
      <div className="TaskLists">
        <div className="column">
          <h3 className="status-label">To Do</h3>
          <ul>
            {issueToDo.map((issue) => (<Issue key={issue.id} issue={issue} />))}
        </ul>
        </div>
        <div className="column">
          <h3 className="status-label">In Progress</h3>
          <ul>
            {issueInProgress.map((issue) => (<Issue key={issue.id} issue={issue} />))}
          </ul>
        </div>
        <div className="column">
          <h3 className="status-label">Done</h3>
          <ul>
            {issueDone.map((issue) => (<Issue key={issue.id} issue={issue} />))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
