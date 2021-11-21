import './interests.scss'

export default function Interests({text}) {

    return (
        <div className="Interets" id="interests">
            <div className="parent"> 
                <div className="child" >{text}</div>
            </div>
        </div>
    )
}
