import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button className="btn btn-blue mr-8" onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button className="btn btn-blue" onClick={goToNextPage}>Next</button>}
    </div>
  )
}
