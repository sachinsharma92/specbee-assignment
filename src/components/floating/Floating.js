import React from 'react'

// Style here
import "./styles.scss";

export default function Floating() {
  return (
    <div className='floating-style'>
      <button> Share <i class="fa-solid fa-share-nodes"></i></button>
      <div className="divider"></div>
      <button> Top <i class="fa-solid fa-arrow-up-long"></i></button>
    </div>
  )
}
