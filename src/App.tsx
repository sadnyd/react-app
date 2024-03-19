import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonNew from "./components/ButtonNew";

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
  let text = "Hello";
  return (
    <div>
      <ButtonNew color="secondary" onClick={() => console.log("clicked")}>
        {text}
      </ButtonNew>
    </div>
  );
}

export default App;
