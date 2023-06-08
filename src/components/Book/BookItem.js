function BookItem(props) {
  
const {
  categories,
  name,
  author,
  completedChap,
  totalChap
} = props

const bookProgress = `You have read ${(completedChap / totalChap)*100} %`;

const currentChap = `${completedChap < totalChap ? completedChap : totalChap}`

return (
  <div className="book-item">

    {/* Left section */}
    <div className="left-section">
     <span className="bookCat">{categories}</span>
      <span className="bookTitle">{name}</span>
       <span className="bookAuthor">{author}</span>
       <nav className="bookInter">
       </nav>

    </div>
{/* Middle Section */}
    <div className="middle-section">

     <p> {bookProgress}</p>
    </div>

{/* Right section */}
    <div className="right-section">
      <p className="currentHolder">Current Chapter</p>
      <p className="currentChapter">{currentChap}</p>
      <button className="update-btn" type="button">Update Progress</button>
    </div>

  </div>
)
}

export default BookItem;