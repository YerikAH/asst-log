import { CollectionConfig } from "payload/types";

const HistoryAttendance: CollectionConfig = {
  slug: "history-attendance",
  admin: {
    useAsTitle: "date",
  },
  labels: {
    plural: "Historial de asistencias",
    singular: "Historial de asistencia",
  },
  fields: [
    {
      name: "date",
      type: "date",
      label: "Fecha",
      required: true,
    },
    {
      name: "time",
      type: "text",
      label: "Hora",
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      label: "Usuario",
      required: true,
    },
    {
      name: "type",
      type: "select",
      label: "Tipo de asistencia",
      required: true,
      options: [
        { label: "Entrada", value: "entry" },
        { label: "Salida", value: "departure" },
      ],
    },
    {
      name: "attendance",
      type: "relationship",
      relationTo: "attendance",
      label: "Asistencia",
      required: true,
    },
  ],
};
export default HistoryAttendance;
