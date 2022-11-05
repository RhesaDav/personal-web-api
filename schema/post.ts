import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";

import { image, text, timestamp } from "@keystone-6/core/fields";

import { document } from "@keystone-6/fields-document";

const Post = list({
  access: allowAll,
  fields: {
    title: text({ validation: { isRequired: true } }),
    content: document({
      formatting: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
      links: true,
      dividers: true,
    }),
    author: text(),
    image : image({
        storage : 'my_images',
    }),
    createdAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
    updatedAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
      db: {
        updatedAt: true,
      },
    }),
  },
});

export default Post;
