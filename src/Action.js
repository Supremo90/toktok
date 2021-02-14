import React, {useState} from 'react';
import './Action.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';

function Action({ likes }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="toktok_action">
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            {liked ? (
                <FavoriteIcon fontSize="large"
                onClick= {(e)=>setLiked(false)}/>
            ):(
                <FavoriteBorderIcon fontSize="large"
                onClick= {(e)=>setLiked(true)}/>
            )}
            
            
            </button>
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            <CommentIcon/>
            </button>
            <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            <ShareIcon/>
            </button>

            <p>{liked ? likes + 1: likes}</p>
        </div>
    )
}

export default Action;
