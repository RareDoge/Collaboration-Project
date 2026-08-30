const Issue = ({ issue }) => {
  return (
    <div className="issue-box">
      <p>{issue.title}</p>
      <p>{issue.desc}</p>
      <p>{issue.status}</p>
      <p>{issue.priority}</p>
    </div>
  )
}

export default Issue
