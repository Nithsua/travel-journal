import journals from "./data";
import Journal from "./components/Journal";
import globe from "./images/globe.png";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img
          src={globe}
          style={{ width: "24px", height: "24px", paddingRight: "5px" }}
        />
        <h4 className="header-title">My Travel Journal</h4>
      </header>
      <main className="main">
        {journals.map((v, i) => {
          console.log(v);
          return <Journal key={i} {...v} />;
        })}
      </main>
    </div>
  );
}

export default App;
