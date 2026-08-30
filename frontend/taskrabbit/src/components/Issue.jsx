const Issue = ({ issue }) => {
  return (
    <div className="issue-box">
      <h3>{issue.title}</h3>
      <p>{issue.desc}</p>
      <p>{issue.status}</p>
      <p>{issue.priority}</p>
    </div>
  )
}

export default Issue
