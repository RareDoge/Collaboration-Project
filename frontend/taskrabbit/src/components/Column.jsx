import Issue from "./Issue"

const Column = ({label, issueList, setNewTask}) => {
  
    return (
        <div className="column">
          <div className="header">
            <h3 className="status-label">{label}</h3>
            <button onClick={() => setNewTask(true)}>+</button>
          </div>
          <ul>
            {issueList.map((issue) => (<Issue key={issue.id} issue={issue} />))}
          </ul>
        </div>
    )
}

export default Column