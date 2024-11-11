import {
    SimpleForm,
    Edit,
    TextInput,
    ReferenceInput,
    NumberInput,
    required,
  } from 'react-admin';
  
  export const UserEdit = () => {
    return (
      <Edit>
        <SimpleForm>
          {/* Campo para editar el nombre de usuario */}
          <TextInput
            source="userName"
            validate={[required()]}
            label="Username"
          />
  
          {/* Campo para elegir el curso activo del usuario */}
          <ReferenceInput source="activeCourseId" reference="courses" label="Active Course">
            <TextInput source="title" />
          </ReferenceInput>
  
          {/* Campo para editar los corazones del usuario */}
          <NumberInput source="hearts" validate={[required()]} label="Hearts" />
  
          {/* Puedes añadir más campos aquí si lo necesitas */}
        </SimpleForm>
      </Edit>
    );
  };
  
  