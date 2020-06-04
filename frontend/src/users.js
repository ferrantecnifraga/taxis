import * as React from "react";
import { List, Datagrid, TextField, EmailField, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const UserList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="address.street" />
                <TextField source="phone" />
                <TextField source="website" />
                <TextField source="company.name" />
            </Datagrid>
            )}
        </List>
    );
}