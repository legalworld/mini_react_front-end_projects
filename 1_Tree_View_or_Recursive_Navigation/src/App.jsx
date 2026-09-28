import Index from "./components/Index";
import menus from "./data/data.js";
function App() {
  return (
    <div>
      <Index menus={menus} />
    </div>
  );
}

export default App;
