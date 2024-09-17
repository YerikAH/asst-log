import { CollectionConfig } from "payload/types";

const Attendance: CollectionConfig = {
  slug: "attendance",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    plural: "Asistencias",
    singular: "Asistencia",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nombre de la asistencia",
      unique: true,
    },
    {
      name: "password",
      type: "text",
      required: true,
      label: "Contraseña la asistencia",
    },
    {
      name: "business",
      type: "relationship",
      relationTo: "business",
      required: true,
      label: "Empresa a la que pertenece la asistencia",
      validate: async (value, { req }) => {
        if (!value) {
          return "La empresa es requerida.";
        }

        const business = await req.payload.findByID({
          collection: "business",
          id: value,
        });

        if (!business) {
          return "La empresa seleccionada no es válida.";
        }

        return true;
      },
    },
    {
      name: "schudule",
      type: "group",
      fields: [
        {
          name: "monday",
          type: "group",
          label: "Lunes",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "tuesday",
          type: "group",
          label: "Martes",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "wednesday",
          type: "group",
          label: "Miercoles",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "thuesday",
          type: "group",
          label: "Jueves",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "friday",
          type: "group",
          label: "Viernes",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "saturday",
          type: "group",
          label: "Sábado",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
        {
          name: "sunday",
          type: "group",
          label: "Domingo",
          fields: [
            {
              name: "start",
              type: "text",
              label: "Hora de inicio",
            },
            {
              name: "end",
              type: "text",
              label: "Hora de fin",
            },
          ],
        },
      ],
    },

    {
      name: "methods",
      type: "array",
      required: true,
      fields: [
        {
          name: "method",
          type: "relationship",
          relationTo: "method-attendance",
          required: true,
        },
      ],
    },
    {
      name: "infoStyles",
      type: "group",
      fields: [
        {
          name: "color",
          type: "text",
          required: true,
          label: "Color de la asistencia",
        },
        {
          name: "icon",
          type: "text",
          required: true,
          label: "Icono de la asistencia",
        },
      ],
    },
  ],
};

export default Attendance;
