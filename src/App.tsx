import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <div className="bg-white " aria-label="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
