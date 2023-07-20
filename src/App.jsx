import {Route, Routes} from "react-router-dom";
import './App.css'
import {Navigation} from "./pages/navigation/Navigation.Component.jsx";
import {Users} from "./pages/users/Users.Component.jsx";
import {UserForm} from "./pages/user-form/UserForm.Component.jsx";
import {Toaster} from "react-hot-toast";

function App() {
  return (
      <div className="App">
        <Toaster />
          <Routes>
              <Route path='/' element={<Navigation/>}>
                  <Route index element={<Users/>}/>
                  <Route path='/form' element={<UserForm/>}/>
              </Route>
          </Routes>
      </div>
  )
}

export default App
