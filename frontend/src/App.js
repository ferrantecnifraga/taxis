import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import authProvider from './authProvider';

import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from './post';
import Dashboard from './Dashboard';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");


export const App = () => {
  
    return (
      <div>
      <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      </Admin>
      </div>
      
    );

}

