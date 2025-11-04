
function ProfilePic(){

    const imageUrl = "./assets/pic.jpg";

    const handleClick = (event) => {
        event.target.style.display = "none";
    }

    return (
        <>
            <img onClick={handleClick} src={imageUrl} alt="An image of a man standing in the rain" />
        </>
    );
}

export default ProfilePic;