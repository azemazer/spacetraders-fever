import Nav from "../components/nav/Nav";

export default function Login() {
    return(
    <>
        <Nav />
        <form>
            <div className="mb-3">
                <label htmlFor="loginName" className="form-label">Your Nickname</label>
                <input type="text" className="form-control" id="loginName" aria-describedby="loginHelp" />
                <div id="loginHelp" className="form-text">The nickname you registered with.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="loginKey" className="form-label">Your ID Key</label>
                <input type="text" className="form-control" id="loginKey" aria-describedby="LoginKeyHelp" />
                <div id="LoginKeyHelp" className="form-text">The very unique ID key we specifically asked you to save preciously when you registered.</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
    )
}
