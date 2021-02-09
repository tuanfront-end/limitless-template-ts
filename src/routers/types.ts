import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/components"?: {};
  "/home2"?: {};
  "/our-story"?: {};
  "/our-story-long"?: {};
  "/our-mission"?: {};
  "/our-team"?: {};
  "/contact"?: {};
  "/volunteer"?: {};
  "/events"?: {};
  "/careers"?: {};
  "/programs"?: {};
  "/the-blog"?: {};
  "/donate"?: {};
  "/blog-single"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
