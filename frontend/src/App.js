import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");



export const App = () => {
  
    return (
      <div>
      <Admin dataProvider={dataProvider} >
        
      </Admin>
      </div>
    );

}

