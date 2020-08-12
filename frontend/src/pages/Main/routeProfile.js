import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tasks from './Tasks';
import Users from './Users';
import Queries from './Queries';
import AddTask from './AddTask';
import AddQuerie from './AddQuerie';
import Dashboard from './Dashboard';
import Header from '../../components/Header';
export default function RoutesProfile(){
  return(
    <Switch>
      <Route exact path="/profile/dashboard" >
        <Header title="Dashboard"/>
        <Dashboard/>
      </Route>
      <Route exact path="/profile/queries">
        <Header title="Consultas" buttonTitle="Add Querie" rota="addQuerie"/>
        <Queries/>
      </Route>
      <Route exact path="/profile/tasks">
        <Header title="Tarefas" buttonTitle="Add Task" rota="addTask"/>
        <Tasks/>
      </Route>
      <Route exact path='/profile/addQuerie'>
        <Header title="Add Consulta"/>
        <AddQuerie/>
      </Route>
      <Route exact path="/profile/addTask">
        <Header title="Add Tarefa"/>
        <AddTask />
      </Route>
      <Route exact path="/profile/users">
        <Header title="Users"/>
        <Users/>
      </Route>
    </Switch>
  );
}
