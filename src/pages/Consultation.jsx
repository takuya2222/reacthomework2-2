import React from 'react'
import { Link } from 'react-router-dom'

export const Consultation = () => {
  return (
    <div>
      <h1>-ご相談内容-</h1>

      <textarea name="" id="" cols="30" rows="10"></textarea>

      <div>
        <Link to="/questions">
          <button>前へ戻る</button>
        </Link>
        <Link to="/confirmation">
          <button>次へ進む</button>
        </Link>
      </div>
    </div>
  )
}
