import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch} from 'react-router-dom'
import TaskListView from './Task'
import Delete from './Delete'
import Detail from './Detail'
import App from './App';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";

document.head.appendChild(styleLink);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route  exact path="/" component={App}/>
    <Route path="/WorkerTask" component={TaskListView}/>
    <Route path="/Delete/:id" component={Delete}/>
    <Route path="/Detail/:id" component={Detail}/>
    </Switch>
      </BrowserRouter>,
  document.getElementById("root")
)
