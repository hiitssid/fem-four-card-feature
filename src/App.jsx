import "./App.css";
import Title from "./Title";
import Card from "./Card";
import arrayData from "./data";

function App() {
  const cards = arrayData.map((details) => {
    return <Card key={details.id} data={details} />;
  });

  return (
    <div className="App">
      <Title />
      <div className="container">{cards}</div>
    </div>
  );
}

export default App;
