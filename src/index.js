import React from "react";
import ReactDom from "react-dom";
import SpecificBook from './Book'
import {greeting} from "./testing/testing"
//CSS
import "./index.css";

//JS
import {books} from "./books"

function BookList() {
  console.log(greeting)
  return (
    <section className="bookList">
      {books?.map((book,index)=> {
        return(
          <SpecificBook
            key={book.id}
            {...book}
          ></SpecificBook>
        );
      })}
    </section>
  )
}

ReactDom.render(<BookList></BookList>,document.getElementById('root'));