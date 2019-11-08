import React from 'react';

export const Display = (props) => {

    return(
        <div className='display'>
            <div className='count-cont'>
                <p>Balls</p>
                <p className='count'>{props.balls}</p>
            </div>
            <div className='count-cont'>
                <p>Strikes</p>
                <p className='count'>{props.strikes}</p>
            </div>
            <div className='count-cont'>
                <p>Outs</p>
                <p className='count'>{props.outs}</p>
            </div>
        </div>
    )
}