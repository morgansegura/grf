/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    categories: Category;
    customers: Customer;
    media: Media;
    pages: Page;
    users: User;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title: string;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    feature?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  pageTitle: string;
  slug?: string | null;
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  layout?:
    | (
        | {
            backgroundColor?: ("none" | "red" | "blue" | "orange") | null;
            columns?:
              | {
                  width: "oneThird" | "half" | "twoThirds" | "full";
                  alignment: "left" | "center" | "right";
                  content: {
                    root: {
                      type: string;
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ("ltr" | "rtl") | null;
                      format:
                        | "left"
                        | "start"
                        | "center"
                        | "right"
                        | "end"
                        | "justify"
                        | "";
                      indent: number;
                      version: number;
                    };
                    [k: string]: unknown;
                  };
                  id?: string | null;
                }[]
              | null;
            accentLine?: boolean | null;
            accentLineAlignment?: ("left" | "right") | null;
            paddingTop?: ("none" | "small" | "medium" | "large") | null;
            paddingBottom?: ("none" | "small" | "medium" | "large") | null;
            id?: string | null;
            blockName?: string | null;
            blockType: "content";
          }
        | {
            image: string | Media;
            type?: ("normal" | "fullscreen" | "wide") | null;
            caption?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ("ltr" | "rtl") | null;
                format:
                  | "left"
                  | "start"
                  | "center"
                  | "right"
                  | "end"
                  | "justify"
                  | "";
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: "image";
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: "customers";
        value: string | Customer;
      }
    | {
        relationTo: "users";
        value: string | User;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}

// declare module 'payload' {
//   export interface GeneratedTypes extends Config {}
// }
