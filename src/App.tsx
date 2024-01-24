import { useState } from "react";
import Button from "./components/Button"
import Alert from "./components/alert";

function App()
{
  const [alertVisible, setalertVisibility] = useState(false);
  
  return (
    <div>
      {alertVisible && <Alert onClose={() => setalertVisibility(false)}> Alert you dumb ass, shut your bitch ass up</Alert>}
      <Button color="danger" onClick={() => setalertVisibility(true)}>My Button</Button>
    </div>
  )
}
export default App;