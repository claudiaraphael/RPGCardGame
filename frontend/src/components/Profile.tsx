import pfp from '../assets/pfp.jpg'

function Profile() {
    return(
        <div className="profile-card">
            <img className="profile-image" alt="profile picture" src={pfp} />
            <h1 className="profile-title">Cláudia Rodrigues</h1>
            <a href="">@claudiaraphael</a>
            <p className="profile-text">I love building apps</p>
        </div>
    );
}

export default Profile