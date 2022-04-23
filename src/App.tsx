import React from "react";

function App() {
  const [count, setCount] = React.useState(0)


  console.log(count)
  
  return (
    <div
      style={{
        padding: 30,
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
