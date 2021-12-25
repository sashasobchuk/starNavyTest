import React from "react";
import '../App.css'

const Cubs = (props) => {

    return (
        <div className="cubsContainer">
            {props.cubs.map((col, index) => {
                return (
                    <div
                        className={'colonsContainer'}
                        key={index}>
                        {col.map((item) => (<div
                                style={{height:`${70/props.cubNumbers}vh`}}
                                className='cub'
                                key={item.id}
                                id={item.id}
                                onMouseOver={props.hoverHandler}
                            />))}
                    </div>
                )
            })}
        </div>
    )
}

export default Cubs;