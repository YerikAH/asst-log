import { CollectionConfig } from "payload/types";

const Business: CollectionConfig = {
  slug: "business",
  auth: false,
  admin: {
    useAsTitle: "name",
  },
  labels: {
    plural: "Empresas",
    singular: "Empresa",
  },
  access: {
    create: ({ req: { user } }) => !!user, // Solo usuarios autenticados pueden crear empresas
    read: ({ req: { user } }) => {
      if (user) {
        return {
          owner: {
            equals: user.id, // Solo el creador puede leer su propia empresa
          },
        };
      }
      return false;
    },
    update: ({ req: { user } }) => {
      if (user) {
        return {
          owner: {
            equals: user.id, // Solo el creador puede actualizar su propia empresa
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
      required: true,
      label: "Nombre de la empresa",
      unique: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
      label: "Descripción de la empresa",
    },
    {
      name: "address",
      type: "text",
      label: "Dirección de la empresa",
    },
    {
      name: "phone",
      type: "text",
      label: "Teléfono de la empresa",
    },
    {
      name: "emailBusiness",
      type: "text",
      label: "Correo electrónico de la empresa",
      required: false,
    },
    {
      name: "website",
      type: "text",
      label: "Sitio web de la empresa",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "Logo de la empresa",
    },
    {
      name: "owner",
      type: "relationship",
      relationTo: "users",
      label: "Administradores de la empresa",
      required: true,
    },
  ],
};

export default Business;
