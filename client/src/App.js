import './App.css';
import { Router } from "@reach/router";
import ShowAuthor from './components/ShowAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';


// Rendering components through Main.Js in the views folder and reach router
function App() {
  return (
    <div>
      <Router>
        <AuthorList path="/" />
        <AuthorForm path="/new-author" />
        <ShowAuthor path="/author/:_id" />
        <UpdateAuthor path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
