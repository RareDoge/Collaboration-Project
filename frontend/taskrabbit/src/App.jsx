import { useState, useEffect } from "react"
import axios from "axios"
import issueService from "./services/issues"
import Issue from "./components/Issue"
import StatusOptions from "./components/StatusOption"
import CreateTask from "./components/CreateTask"
import Column from "./components/Column"
import NewTask from "./components/NewTask"
import Footer from "./components/Footer"
import Header from "./components/Header"

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

    issueService.create(issueObject)
      .then((result) => {
        setIssues(issues.concat(result))
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

    setNewTask(false)
  }

  const handleIssueChange = (event) => {
    const { name, value } = event.target
    setNewIssue({
      ...newIssue,
      [name]: value,
    })
  }

  const deleteService = (deleteIssue) => {
    issueService.deleteIssue(deleteIssue.id)

    const afterDelete = issues.filter(issues => issues.id != deleteIssue.id)

    setIssues(afterDelete)
  }

  const issueToDo = issues.filter(issue => issue.status == "To Do")
  const issueInProgress = issues.filter(issue => issue.status == "In Progress")
  const issueInReview = issues.filter(issue => issue.status == "In Review")
  const issueDone = issues.filter(issue => issue.status == "Done")

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div>
        <h1 className="title-head">TASKS</h1>
          <NewTask 
            trigger={newTask}
            setNewTask={setNewTask}
            addIssue={addIssue}
            newIssue={newIssue}
            handleIssueChange={handleIssueChange}
          />
        </div>
        <div className="TaskLists">
          <Column label={"To Do"} issueList={issueToDo} setNewTask={setNewTask} deleteService={deleteService}/>
          <Column label={"In Progress"} issueList={issueInProgress} setNewTask={setNewTask} deleteService={deleteService}/>
          <Column label={"In Review"} issueList={issueInReview} setNewTask={setNewTask} deleteService={deleteService}/>
          <Column label={"Done"} issueList={issueDone} setNewTask={setNewTask} deleteService={deleteService}/>
        </div>
        <div className="deleteTest">

        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
