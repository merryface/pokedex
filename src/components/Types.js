import React from 'react'

export default function Types(types) {
  return (
    <div>
      {
        types(t => (
          <p key={t}>{t}</p>
        ))
      }
    </div>
  )
}
