import { CollectionConfig } from "payload/types";

export const Register: CollectionConfig = {
  slug: "register",
  labels: {
    plural: "Registros",
    singular: "Registro",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre del registro",
    },
    {
      name: "id",
      type: "text",
      required: true,
      label: "Identificador del registro",
      unique: true,
    },
  ],
};

export default Register;
