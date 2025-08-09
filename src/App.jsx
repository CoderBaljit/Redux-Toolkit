import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import { store } from "./App/Stroe";


function App() {
  return (
    <Provider store={store} >
      <h1 className="text-center text-4xl">Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  );
}

export default App;
