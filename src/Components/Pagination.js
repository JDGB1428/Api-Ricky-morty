import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  }

  const handleNext = () => {
    onNext();
  }

  return (
    <div className="pagination">
      {
        prev ? (
          <button className="previous" onClick={handlePrevious}>Previous</button>
        ) :
          null}
      {
        next ? (
          <button className="next" onClick={handleNext}>Next</button>
        ) : null}
    </div>
  )
}

export default Pagination