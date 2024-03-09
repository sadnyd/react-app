import ListGroup from "./components/ListGroup";

function App() {
  let items = ["tokyo", "paris", "london", "san francisco"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
