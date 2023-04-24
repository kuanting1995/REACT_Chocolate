import React from 'react'

function TagCheckbox(props) {
  const { value, handleChecked, tags } = props
  return (
    <>
      <div className="checkbox">
        <label className="d-flex flex-row align-items-center">
          <input
            style={{ width: '15%', height: '15%' }}
            type="checkbox"
            className="col-2 mx-1 my-2"
            value={value}
            checked={tags.includes(value)}
            onChange={handleChecked}
          />{' '}
          {value}
        </label>
      </div>
    </>
  )
}

export default TagCheckbox
