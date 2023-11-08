import React from 'react';
import LikeButton from './LikeButton';
import './Message.css'
import moment from 'moment';

// Author Klara
function Message({props, handleLikeButtonClick }) {
  return (
     <div className="message-container">
            <p>{props.message}</p>
            <div className="like-and-time">
                <div className="like-info">
                    <LikeButton props={props} handleLikeButtonClick={handleLikeButtonClick}/>
                    <span className="number-of-likes">x{props.hearts}</span>
                </div>
                <div className="time-info">
                    <p>{moment(props.createdAt).fromNow()}</p>
                </div>
            </div>
        </div>
  )
}

export default Message
