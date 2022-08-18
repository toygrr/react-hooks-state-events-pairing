import video from "../data/video.js"
import TitleContainer from "./TitleContainer"
function App() {
  console.log("Here's your data:", video)

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <TitleContainer
        views={video.views}
        created={video.createdAt}
        title={video.title}
        comments={video.comments}
      />
    </div>
  )
}

export default App
