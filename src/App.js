import "./Dictionary";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="react" />
        </main>

        <footer className="footer text-center">
          {" "}
          <a
            href="https://github.com/PeyHunter/react-dictionary-app"
            target="blank"
          >
            open source
          </a>{" "}
          by{" "}
          <a
            href="https://peyton-hunter-full-stack-portfolio.netlify.app/"
            target="blank"
          >
            {" "}
            Peyton Hunter{" "}
          </a>{" "}
        </footer>
        <br />
      </div>
      <br />
    </div>
  );
}
