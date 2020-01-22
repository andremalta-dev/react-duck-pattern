import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from '../../wrappers/BookCard'
import { Creators as BooksActions } from '../../../store/ducks/books'

const BookPage = () => {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = ({ id }) => {
    dispatch(BooksActions.removeBook(id))
  }

  return (
    <>
      <h1> Cadastro de Livros</h1>
      {books && books.length > 0
        ? books.map(book => (
            <BookCard
              key={book.id}
              name={book.name}
              author={book.author}
              abstract={book.abstract}
              onDelete={() => handleDeleteBook(book)}
            />
          ))
        : 'No books registered.'}
    </>
  )
}

export default BookPage
