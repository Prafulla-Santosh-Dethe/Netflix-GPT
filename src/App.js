import { Provider } from "react-redux";
import Body from "./Components/Body" 
import appStore from "./Utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
function App() {

  // const appRouter = createBrowserRouter([
  //   {
  //       path:"/",
  //       element:<Login/>
  //   },
  //   {
  //       path:"/browse",
  //       element:<Browse/>
  //   }
  // ])
  return (
      //  if router in app.js
      //  <Provider store={appStore}>
      //     <RouterProvider router={appRouter}>
      //        <Body />
      //     </RouterProvider>
      //   </Provider>

      <Provider store={appStore}>
        <Body/>
      </Provider>
  );
}

export default App;
