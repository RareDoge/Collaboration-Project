const Issue = ({ issue, deleteService }) => {



  return (
    <div className="issue-box">
      <div className="title">
        <p>{issue.priority}</p>
        <button className="trashcan" onClick={() => deleteService(issue)}>
          <img src="./src/images/trash.png"></img>
        </button>
      </div>
      <h3>{issue.title}</h3>
      <p>{issue.desc}</p>
      <p>{issue.status}</p>
    </div>
  )
}

export default Issue
