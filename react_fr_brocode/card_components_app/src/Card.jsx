import profile_pic from "./assets/render.png"

function Card() {
    return(
        <div className="card">
            <img src={profile_pic} alt="profile picture"/>
            <h2 className="card_heading">Jun Lee</h2>
            <p className="card_text">I'm a Software Engineering student and love playing PUBG and Chess</p>
        </div>
    );
}

export default Card