import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      {/* <Person></Person>
      <Message></Message> */}
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  )
}

const Person = () => {
  return <h2>john doe</h2>
}

const Message = () => {
  return <p>this is my message</p>
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}
const Image = () => {
  return (
    <img src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_3.png" alt=""></img>
  )
}

const Title = () => {
  return (
    <h1>I Love You to the Moon and Back</h1>
  );
}

const Author = () => {
  return (
    <h4 style={{color:'#617d98',fontSize:'0.75rem',margin:'0.25rem'}}>Amelia Hepworth</h4>
  )
}
// const Greeting = () => {
//   return React.createElement('h1',{},'hello world');
// }

ReactDom.render(<BookList></BookList>,document.getElementById('root'));