import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img = "http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_3.png";
function BookList() {
  return (
    <section className="bookList">
      {/* <Person></Person>
      <Message></Message> */}
      <Book></Book>
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>  
      <h4>{author.toUpperCase()}</h4>
      {console.log(props)}
    </article>
  )
}

ReactDom.render(<BookList></BookList>,document.getElementById('root'));