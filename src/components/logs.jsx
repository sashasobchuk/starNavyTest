import React from "react";

const Logs = (props) => {
    return (
        <div>
            <h1>Hover Squares</h1>
            <div className='logsContainer'>
                {props.alerts.map((alert) =>
                    <div key={alert.id}>
                        {alert.id}
                    </div>)}
            </div>

        </div>
    )
}

export default Logs;