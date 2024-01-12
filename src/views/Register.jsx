import Nav from "../components/nav/Nav";

export default function Register() {
    return(
    <>
        <Nav />
        <form>
            <div className="mb-3">
                <label htmlFor="registerName" className="form-label">Your Nickname</label>
                <input type="text" className="form-control" id="registerName" aria-describedby="registerHelp" />
                <div id="registerHelp" className="form-text">An unique name: your nickname.</div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    </>
    )
}
