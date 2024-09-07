import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  labels: {
    plural: "Usuarios",
    singular: "Usuario",
  },
  access: {
    create: () => true,
    update: ({ req: { user } }) => {
      if (user) {
        return {
          id: {
            equals: user.id,
          },
        };
      }
      return false;
    },
    delete: () => false,
    read: ({ req: { user } }) => {
      if (user) {
        return {
          id: {
            equals: user.id,
          },
        };
      }
      return false;
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nombre del usuario",
      required: true,
    },
    {
      name: "lastname",
      type: "text",
      label: "Apellido del usuario",
      required: true,
    },
    {
      name: "birthdate",
      type: "date",
      label: "Fecha de nacimiento",
    },
    {
      name: "phoneNumber",
      type: "text",
      label: "Número de celular",
    },
    {
      name: "photo",
      type: "relationship",
      relationTo: "media",
      label: "Foto del usuario",
    },
  ],
};

export default Users;
