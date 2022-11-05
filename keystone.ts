import dotenv from "dotenv";
dotenv.config();
import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";

const PORT = process.env.PORT || "3000";
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://rhesadav48:rahasia@34.128.119.167:5432/cms";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: DATABASE_URL,
      enableLogging: true,
      useMigrations: true,
      idField: { kind: "uuid" },
    },
    lists,
    session,
    server: {
      port: parseInt(PORT),
      cors : {
        origin : true, credentials : true
      }
    },
    storage: {
      my_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `http://34.128.119.167:5000/images${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
      my_files: {
        kind: "local",
        type: "file",
        generateUrl: (path) => `http://34.128.119.167:5000/files${path}`,
        serverRoute: {
          path: "/files",
        },
        storagePath: "public/files",
      },
    },
  })
);
