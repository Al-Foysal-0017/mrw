import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdffile from "../../assets/pdf/MetaRaceWinner.pdf";
import Container from "../../components/container/Container";
import "./whitepaper.css";

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pdfFile = pdffile;
  return (
    <Container className="container">
      <div className="viewer">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            ></Viewer>
          </Worker>
        )}
      </div>
    </Container>
  );
}

export default App;
