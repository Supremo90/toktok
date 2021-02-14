import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="p-4">
            <h5 class="text-white h4">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-light bg-light ">


        <div className="toktok_elements">
        <div className="row">
        <div class="col align-self-start toktok_hamburger">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        </div>

            <div class="col align-self-end">
             <a class="navbar-brand" href="#"><img className="toktok_logo" alt="toktok logo" src="http://www.primaonline.it/wp-content/uploads/2019/12/Logo-TikTok-1.png"></img></a>
            </div>
        </div>
        </div>
        
        </nav>
      </div>
        
    )
}

export default Header;
