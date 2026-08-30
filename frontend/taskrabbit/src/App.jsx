import { useState, useEffect } from "react"
import axios from "axios"
import issueService from "./services/issues"
import Issue from "./components/Issue"
import StatusOptions from "./components/StatusOption"

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
  
  return (
    <div>
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
      <ul>
        {issues.map((issue) => (<Issue key={issue.id} issue={issue} />))}
      </ul>
    </div>
  )
}

export default App;
