import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import authProvider from './authProvider';

import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from './post';
import Dashboard from './Dashboard';

import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BarChartIcon from '@material-ui/icons/BarChart';
import ErrorIcon from '@material-ui/icons/Error';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");


export const App = () => {
  
    return (
      <div>
      <Admin  dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Viajes" list={UserList} icon={AirportShuttleIcon} />
        <Resource name="Choferes" list={PostList} edit={PostEdit} create={PostCreate} icon={AssignmentIndIcon} />
        <Resource name="Licencias" list={UserList} icon={ContactMailIcon} />
        <Resource name="Facturas" list={UserList} icon={BarChartIcon} />
        <Resource name="Sanciones" list={UserList} icon={ErrorIcon} />
        <Resource name="Usuarios" list={UserList} icon={PeopleOutlineIcon} />
      </Admin>
      </div>
      
    );

}

