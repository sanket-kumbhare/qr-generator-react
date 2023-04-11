import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="container mt-5">
      <Heading heading={"QR Generator"} />
      <Form />
    </div>
  );
}

export default App;
