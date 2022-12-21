import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/login/Login";
import ListTrainees from "./pages/listTrainees/ListTrainees";
import NewTrainees from "./pages/newTrainees/NewTrainees";
import Trainee from "./pages/trainee/Trainee";
import { ListProvider } from "./context/ListData";
import { RetrieveProvider } from "./context/retrieveContext";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <ListProvider>
          <RetrieveProvider>
            <Routes>
              <Route path="/">
                <Route index element = {<Home/>}/>
                <Route path="login" element = {<Login/>} />
                <Route path="trainees">
                  <Route index element = {<ListTrainees/>} />
                  <Route path="newTrainee" element = {<NewTrainees/>} />
                  <Route path=":traineeId" element = {<Trainee/>} />
                </Route>
                <Route path="trainers">
                  <Route index element = {<ListTrainees/>} />
                  <Route path="newTrainer" element = {<NewTrainees/>} />
                  <Route path=":trainerId" element = {<Trainee/>} />
                </Route>
              </Route>
            </Routes>
          </RetrieveProvider>
        </ListProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
