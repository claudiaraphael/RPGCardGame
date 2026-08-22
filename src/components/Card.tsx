import pfp from '../assets/pfp.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={pfp}/>
            
            <h1 className="card-title">Cláudia Rodrigues</h1>
            <a href="">@claudiaraphael</a>
            <p className="card-text">I love building apps</p>
        </div>
    );
}

export default Card