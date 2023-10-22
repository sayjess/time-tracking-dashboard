
const titleToImageMap = {
    "Work": {
        "background": '/images/icon-work.svg',
        "color": "hsl(15, 100%, 70%)"
    },
    "Play": {
        "background": '/images/icon-play.svg',
        "color": "hsl(195, 74%, 62%)"
    },
    "Study": {
        "background": '/images/icon-study.svg',
        "color": "hsl(348, 100%, 68%)"
    },
    "Exercise": {
        "background": '/images/icon-exercise.svg',
        "color": "hsl(145, 58%, 55%)"
    },
    "Social": {
        "background": '/images/icon-social.svg',
        "color": "hsl(264, 64%, 52%)"
    },
    "Self Care": {
        "background": '/images/icon-self-care.svg',
        "color": "hsl(43, 84%, 65%)"
    }    
  };

export default function Card(props) {
    const { background, color } = titleToImageMap[props.title];
    const cardStyle = {
        backgroundColor: color,
    };

    
    return (
        <div className="card-container" style={cardStyle}>
            <div className="img-wrapper">
                <img src={background}/>
            </div>
            <div className="item-wrapper">
                <i className="fa-solid fa-ellipsis"></i>
                <h4>{props.title}</h4>
                <h3>{props.timeframes[props.timeframe].current} hrs</h3>
                <p>Last Week - {props.timeframes[props.timeframe].previous}hrs</p>
            </div>
        </div>
    )
}