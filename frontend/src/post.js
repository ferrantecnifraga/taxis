import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton
    , SimpleForm, ReferenceInput, SelectInput, TextInput,
    Create, Edit, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const PostList = (props) => {
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
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disable source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
                </ReferenceInput>
            <TextInput source="name" />
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);