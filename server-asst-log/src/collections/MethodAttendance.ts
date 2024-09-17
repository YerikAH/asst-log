import { CollectionConfig } from "payload/types";

export const MethodAttendace: CollectionConfig = {
  slug: "method-attendance",
  labels: {
    plural: "Registros",
    singular: "Registro",
  },
  access: {
    read: () => true,
    create: () => true,
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

export default MethodAttendace;
