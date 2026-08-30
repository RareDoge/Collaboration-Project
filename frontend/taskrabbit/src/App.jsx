import { useState, useEffect } from "react"
import axios from "axios"
import issueService from "./services/issues"
import Issue from "./components/Issue"
import StatusOptions from "./components/StatusOption"
import CreateTask from "./components/CreateTask"
import Column from "./components/Column"
import NewTask from "./components/NewTask"

const App = (props) => {
  const [issues, setIssues] = useState([])
  const [newTask, setNewTask] = useState(false)
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
  const issueInReview = issues.filter(issue => issue.status == "In Review")
  const issueDone = issues.filter(issue => issue.status == "Done")

  return (

    <div className="wrapper">
      <div>
      <h1 className="title-head">TASKS</h1>
        {/* <CreateTask
          addIssue={addIssue}
          newIssue={newIssue}
          handleIssueChange={handleIssueChange}
        /> */}
        <NewTask 
          trigger={newTask}
          setNewTask={setNewTask}
          addIssue={addIssue}
          newIssue={newIssue}
          handleIssueChange={handleIssueChange}
        />
      </div>
      <div className="TaskLists">
        <Column label={"To Do"} issueList={issueToDo} setNewTask={setNewTask} />
        <Column label={"In Progress"} issueList={issueInProgress} setNewTask={setNewTask} />
        <Column label={"In Review"} issueList={issueInReview} setNewTask={setNewTask}/>
        <Column label={"Done"} issueList={issueDone} setNewTask={setNewTask}/>
      </div>
    </div>
  )
}

export default App;
