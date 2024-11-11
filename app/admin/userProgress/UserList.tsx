import { List, Datagrid, TextField } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="userId" />
      <TextField source="userName" />
      <TextField source="points" />
      <TextField source="hearts" />
      <TextField source="activeCourseId" />
    </Datagrid>
  </List>
);
