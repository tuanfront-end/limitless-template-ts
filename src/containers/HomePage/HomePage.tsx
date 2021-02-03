import { Alert } from "components/Alert/Alert";
import Avatar from "components/Avatar/Avatar";
import React from "react";

export default function HomePage() {
  return (
    <div className="container">
      <h1>HomePage</h1>
      <section className="space-y-4 hidden">
        <Alert />
        <Alert type="info" />
        <Alert type="success" />
        <Alert type="warning" />
        <Alert type="error" />
      </section>
      <section className="hidden">
        <div className="flex -space-x-2 overflow-hidden">
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          <Avatar sizeClass="h-8 w-8" />
          <Avatar sizeClass="h-8 w-8" />
          <Avatar sizeClass="h-8 w-8" />
          <Avatar sizeClass="h-8 w-8" />
        </div>
        <div className="flex -space-x-2 overflow-hidden">
          <Avatar sizeClass="h-10 w-10" />
          <Avatar sizeClass="h-10 w-10" />
          <Avatar sizeClass="h-10 w-10" />
          <Avatar sizeClass="h-10 w-10" />
        </div>

        <div className="space-x-4">
          <Avatar />
          <Avatar sizeClass="h-8 w-8" />
          <Avatar sizeClass="h-9 w-9" />
          <Avatar sizeClass="h-10 w-10" />
          <Avatar sizeClass="h-12 w-12" />
        </div>
        <div className="space-x-4">
          <div className="relative inline-block">
            <Avatar />
            <div className="absolute top-0 right-0 -mr-2px w-1 h-1 ring-1 ring-status-error rounded-full bg-status-error"></div>
          </div>
          <div className="relative inline-flex items-center">
            <Avatar />
            <span className="text-paragraph-tiny font-semibold ml-2 truncate">
              Name Lastname
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
