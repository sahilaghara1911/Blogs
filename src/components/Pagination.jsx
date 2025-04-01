import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page, handelPageChange,totalPages} = useContext(AppContext)
  return (
    <div>
      <div>
        { page > 1 &&
          <button onClick={() => handelPageChange(page-1)}>Previous</button>
        }
        {
          page < totalPages &&
          (<button onClick={() => handelPageChange(page +1)}>
            Next
          </button>)
        }
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
