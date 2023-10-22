// eslint-disable-next-line react/prop-types
export default function Profile({handleTimeframeChange}) {
    return (
        <div className="profile-container"> 
            <div className="profile">
                <img src="../../public/images/image-jeremy.png"/>
                <div>
                    <p>Report for</p>
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <ul>
                <li id="daily" onClick={() => handleTimeframeChange("daily")}>Daily</li>
                <li id="weekly" onClick={() => handleTimeframeChange("weekly")}>Weekly</li>
                <li id="monthly" onClick={() => handleTimeframeChange("monthly")}>Monthly</li>
            </ul>
        </div>
    )
}