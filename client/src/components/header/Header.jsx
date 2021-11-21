import "./header.css"

export default function Header() {
    return (
        <div className="Header" id="header">
            <div className="left">#</div>
            <div className="right">
                <a className="FAQ">FAQ</a>
                <button className="button join"><span>join</span></button>
            </div>
        </div>
    )
}
