import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-gradient-to-t from-blue-300 to-slate-200 shadow-lg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
