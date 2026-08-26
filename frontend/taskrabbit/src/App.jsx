import { useState, useEffect } from 'react'
import axios from "axios"

const App = (props) => {
  const [count, setCount] = useState(0)
  const [issues, setIssues] = useState([])
  const [newIssue, setNewIssue] = useState({
    title: '',
    desc: '',
    status: '',
  })

  const addIssue = (event) => {
    event.preventDefault()

    const issueObject = {
      title: newIssue.title,
      desc: newIssue.desc,
      status: newIssue.status
    }

    console.log(issueObject)
    setNewIssue({
      title: '',
      desc: '',
      status: '',
    })

    setIssues(issues.concat(issueObject))
    console.log(issues)

  }

  const handleIssueChange = (event) => {
    const {name, value} = event.target
    setNewIssue({
      ...newIssue,
      [name]: value
    })

  }

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
    </div>
  )
}

export default App
