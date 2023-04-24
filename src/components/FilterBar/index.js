import React from 'react'
import PriceRangeRadio from './PriceRangeRadio'
import TagCheckbox from './TagCheckbox'

function FilterBar(props) {
  const {
    priceRangeTypes,
    priceRange,
    setPriceRange,
    tagTypes,
    tags,
    setTags,
  } = props

  const handleChecked = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) return setTags([...tags, value])

    if (tags.includes(value)) {
      const newTags = tags.filter((v) => v !== value)
      setTags(newTags)
    }
  }
  return (
    <>
      <h4>
        巧克力種類
        <button className="btn btn-link btn-sm" onClick={() => setTags([])}>
          重設
        </button>
      </h4>
      {tagTypes.map((value, i) => (
        <TagCheckbox
          value={value}
          key={i}
          tags={tags}
          handleChecked={handleChecked}
        />
      ))}
      <hr />
      <h4>價格</h4>

      {priceRangeTypes.map((value, i) => (
        <PriceRangeRadio
          key={i}
          value={value}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
      ))}

      <div className="padding"></div>
    </>
  )
}

export default FilterBar
