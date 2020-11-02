import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';
import Home from '../pages/Home';
import Logon from '../pages/Logon';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import AddPost from '../pages/AddPost';
import AddTask from '../pages/AddTask';
import AddQuerie from '../pages/AddQuerie';
import Task from '../pages/Task';
import Querie from '../pages/Querie';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/logon" component={Logon}/>
    <Route path="/register" component={Register}/>

    <Route
      path="/dashboard"
      title="Dashboard"
      buttonTitle="AddPost"
      rota="/addPost"
      isPrivate
      component={Dashboard}
    />
    <Route
      path="/addPost"
      title="Add Post"
      isPrivate
      component={AddPost}
    />
    <Route
      path="/addQuerie"
      title="Add Consultas"
      isPrivate
      component={AddQuerie}
    />
    <Route
      path="/addTask"
      title="Add Tarefas"
      isPrivate
      component={AddTask}
      />
    <Route
      path="/task"
      title="Tarefas"
      buttonTitle="AddTask"
      rota="/addTask"
      isPrivate
      component={Task}
    />
    <Route
      path="/querie"
      title="Consultas"
      buttonTitle="AddTask"
      rota="/addQuerie"
      isPrivate
      component={Querie}
    />
  </Switch>
);

export default Routes;
