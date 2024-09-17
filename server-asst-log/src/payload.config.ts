import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import {
  Attendance,
  Business,
  HistoryAttendance,
  Media,
  MethodAttendace,
  Users,
} from "./collections";
import swagger from "payload-swagger";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Media,
    Business,
    Attendance,
    HistoryAttendance,
    MethodAttendace,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud(), swagger({})],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
