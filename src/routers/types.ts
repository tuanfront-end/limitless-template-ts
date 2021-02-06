import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/components"?: {};
  "/detail"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
