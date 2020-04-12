import React from 'react';
import './App.css';

function Tweet(props){
    return(
        <div className="tweet">
            <h3> {props.name} </h3>
            <p>{props.message}</p>
            <h3>Number of Likes</h3>
        </div>
    )
}

export default Tweet

/*<Tweet name="Wierdo" message="I like feet"/>
      <Tweet name="Ralph" message="What's your favorite color"/>
      <Tweet name="Karin" message="I love you Matt"/>
      <Tweet name="Emery" message="I love you Daddy"/>*/