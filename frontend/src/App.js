import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";

import authProvider from './authProvider';

import { UserList } from "./users";
import Dashboard from './Dashboard';
import jsonServerProvider from 'ra-data-json-server';
import {myTheme} from "./myTheme";

//Icons
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BarChartIcon from '@material-ui/icons/BarChart';
import ErrorIcon from '@material-ui/icons/Error';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';




const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


export const App = () => {
  
    return (
      <div>
      <Admin theme={myTheme} dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Viajes" list={UserList} icon={AirportShuttleIcon} />
        <Resource name="users" list={UserList} icon={AssignmentIndIcon} />
        <Resource name="Licencias" list={UserList} icon={ContactMailIcon} />
        <Resource name="Facturas" list={UserList} icon={BarChartIcon} />
        <Resource name="Sanciones" list={UserList} icon={ErrorIcon} />
        <Resource name="Usuarios" list={UserList} icon={PeopleOutlineIcon} />
      </Admin>
      </div>
      
    );

}


