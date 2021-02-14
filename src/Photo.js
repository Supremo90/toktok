import React,{useState} from 'react'
import './App.css';
import Action from './Action';

function Photo({ url, likes }) {
    return (

<div class="container">
  <div class="row">
    <div class="col">
    <img src={url} alt="TEST" width="200" height="300"/>
    </div>
    <div class="col">
        <Action likes={likes}/>
    </div>
  </div>
  <hr/>
</div>


    )
}

export default Photo;
