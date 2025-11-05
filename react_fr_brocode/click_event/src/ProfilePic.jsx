
function ProfilePic(){

    const imageUrl = "./src/assets/pic.jpg";

    const handleClick = (event) => {
        event.target.style.display = "none";
    }

    return (
        <>
            <img onClick={handleClick} src={imageUrl} alt="An image of a man standing in a beem of light"/>
        </>
    );
}

export default ProfilePic;