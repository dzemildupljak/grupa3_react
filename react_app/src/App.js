import "./App.css";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

function App() {
  const ime = "Dzemil";
  const prezime = "Dupljak";
  let rezerva = "  asdasda";
  console.log(rezerva);

  const promenaVred = (nova_vred) => {
    rezerva = nova_vred;
    console.log(rezerva);
  };

  return (
    <div className="App">
      <Header ime_kor={ime} prez_kor={prezime} />
      <button onClick={() => promenaVred("nova vrednost rezerve")}>
        PROMENA
      </button>
      {ime}
      {prezime}
      <Content name={ime} prezime={prezime} prom_vred={promenaVred} />
    </div>
  );
}

export default App;
