import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const books = [
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg",
    author:"Amelia Hepworth",
    title:"I Love You to the Moon and Back",
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/51NYjNgldSL._SX330_BO1,204,203,200_.jpg",
    author:"Delia Owens",
    title:"Where the Crawdads Sing"
  },
  {
    img:"https://images-na.ssl-images-amazon.com/images/I/81Cf61prqrL._AC_UL200_SR200,200_.jpg",
    author:"Shannon Roberts",
    title:"Prayer Journal for Women: 52 Week Scripture,…"
  }
]
// const names = ['john', 'peter', 'sussan']
function BookList() {
  
  return (
    <section className="bookList">
      {books.map((book)=> {
        return(
          <Book
            book={book}
          ></Book>
        );
      })}
    </section>
  )
}

const Book = (props) => {
  const {img,title,author} = props.book
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>  
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList></BookList>,document.getElementById('root'));