import Alert from "./components/Alert";
import Button from "./components/ButtonNew";
import { useEffect, useRef, useState } from "react";
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

  let [alertVisible, setAlertVisible] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setAlertVisible(true);
  };

  const dismissAlert = () => {
    setAlertVisible(false);
  };

  useEffect(() => {
    console.log("EFFECT RUN BECAUSE ALERT CHANGES");
  }, [alertVisible]);

  return (
    <div>
      {alertVisible ? <Alert onClick={dismissAlert}></Alert> : null}
      <Button color="danger" onClick={handleClick}>
        {text}
      </Button>
    </div>
  );
}

export default App;
