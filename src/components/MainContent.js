function MainContent(props) {
  return (
    <>
      <main role="main" className="pt-5">
        {/* props.children代表嵌入在其中的元件或資料內容 */}
        <div className="mt-5">{props.children}</div>
      </main>
    </>
  )
}

export default MainContent
