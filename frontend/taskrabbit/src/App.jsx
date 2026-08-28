import { useState, useEffect } from 'react'
import axios from "axios"
import issueService from './services/issues'
import Issue from './components/Issue'

const App = (props) => {
  const [issues, setIssues] = useState([])
  const [newIssue, setNewIssue] = useState({
    title: '',
    desc: '',
    status: '',
  })

  useEffect(() => {
      const loadIssues = initialIssues => {
        setIssues(initialIssues)
      }
      issueService.getAll()
        .then(loadIssues)
  }, [])

  const addIssue = (event) => {
    event.preventDefault()

    const issueObject = {
      title: newIssue.title,
      desc: newIssue.desc,
      status: newIssue.status
    }

    axios.post('http://localhost:3001/api/issues', issueObject)
      .then(result => {
        setIssues(issues.concat(result.data))
      }).catch(error => {
        console.error("Error creating issue:", error)
        alert("Failed to create issue. Please try again.")
      })

    setNewIssue({
      title: '',
      desc: '',
      status: '',
    })
  }

  const handleIssueChange = (event) => {
    const {name, value} = event.target
    setNewIssue({
      ...newIssue,
      [name]: value
    })
  }
  console.log(issues)
  return (
    <div>
      <form onSubmit={addIssue}>
        <p></p>
        Create a New Issue:
        <br/>
        Title: <input name ="title" value={newIssue.title} onChange={handleIssueChange}/>
        <br/>
        Description: <input name="desc" value={newIssue.desc} onChange={handleIssueChange}/>
        <br/>
        Status: <input name="status" value={newIssue.status} onChange={handleIssueChange}/>
        <button type="submit">Submit Issue</button>
      </form>
      <ul>
        {issues.map(issue => (
          <Issue key={issue.id} issue={issue}/>
        ))}
      </ul>
    </div>
  )
}

export default App
