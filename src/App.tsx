import React from "react";
import JSZip from "jszip";
import FileSaver from "file-saver";

function arrayToCsv(data) {
  return data
    .map(
      (row) =>
        row
          .map(String) // convert every value to String
          .map((v) => v.replaceAll('"', '""')) // escape double colons
          .map((v) => `"${v}"`) // quote it
          .join(",") // comma-separated
    )
    .join("\r\n"); // rows starting on new lines
}

/** Download contents as a file
 * Source: https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
 */
function downloadBlob(content, filename, contentType) {
  // Create a blob
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  // Create a link to download it
  var pom = document.createElement("a");
  pom.href = url;
  pom.setAttribute("download", filename);
  pom.click();
}

// downloadBlob(csv, "export.csv", "text/csv;charset=utf-8;");

let csv1 = arrayToCsv([
  [1, "2", '"3"'],
  [true, null, undefined],
]);

let csv2 = arrayToCsv([
  [4, "10", "30"],
  [true, null, undefined],
]);

function App() {
  const [count, setCount] = React.useState(0);

  console.log(count);

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <button
        onClick={() => {
          // downloadBlob(csv, "export.csv", "text/csv;charset=utf-8;");

          const zip = new JSZip();
          zip.file("cs1.csv", csv1);
          zip.file("cs2.csv", csv2);
          zip.generateAsync({ type: "blob" }).then(function (content) {
            FileSaver.saveAs(content, "download.zip");
          });
        }}
      >
        Download
      </button>
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
