import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import Menu from '../components/Menu';
import Header from '../components/Header';
import ContainerProfile from '../components/ContainerProfile';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  buttonTitle?: string;
  rota?: string;
  title?: string;
};

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  rota,
  title,
  buttonTitle,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if(isPrivate === !!user){
          if(isPrivate===true && !!user===true){
            return(
              <ContainerProfile>
                <Menu/>

                <Header
                  title={title}
                  rota={
                    !!rota === true ? rota : ''
                  }
                  buttonTitle={
                    !!buttonTitle === true ? buttonTitle : '/dashboard'
                  }
                />
                <Component/>
              </ContainerProfile>
            );
          }
          return <Component/>
        } else {
            return (
              <Redirect to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }}/>
            );
          }
      }}/>
  );
};

export default Route;
