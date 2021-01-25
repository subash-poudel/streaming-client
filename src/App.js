import "./App.css";

function App() {
  return (
    <div className="bg">
      <audio controls autoPlay="true" className="audio-control">
        <source src="http://3.86.206.12:8000/stream" type="audio/ogg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default App;
