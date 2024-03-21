import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/ButtonNew";
function App() {
  // let items = ["tokyo", "paris", "london", "san francisco"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  let text = "TEST";
  const handleClick = () => {
    console.log("Clicked btn");
  };
  return (
    <div>
      <Button color="danger" onClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}

export default App;
