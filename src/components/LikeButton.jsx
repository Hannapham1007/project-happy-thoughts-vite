// Component that handles like
// POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>

import React from "react";
import './LikeButton.css';
// Author Karolina 
function LikeButton  ({props, handleLikeButtonClick}) { 
    return(
        <div className="heart-box">
        <i className="fas fa-heart" onClick={() => handleLikeButtonClick(props._id)}></i>
        </div>
    )
}

export default LikeButton