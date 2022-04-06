import React from "react";

function App() {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <video
        style={{
          width: "800px",
          height: "autos",
        }}
        onWaiting={() => {
          console.log("waiting");
        }}
        onCanPlay={() => {
          console.log("canplay");
        }}
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
}

export default App;
