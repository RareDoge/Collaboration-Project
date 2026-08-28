
const Issue = ({issue}) => {

    return (
        <div className="issue-box">
            <p className="issue-box">{issue.title}</p>
            <p>{issue.desc}</p>
            <p>{issue.status}</p>
        </div>
    )
}

export default Issue