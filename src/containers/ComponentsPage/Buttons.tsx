import Button from "components/Button/Button";
import React from "react";

export const Buttons = () => {
  const _renderFilled = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold">Filled</h2>
        <h2 className="text-f5 font-bold">Primary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button size="large" />
          <Button size="medium" />
          <Button size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button disabled size="large" />
          <Button disabled size="medium" />
          <Button disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f5 font-bold">Secondary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button color="secondary" size="large" />
          <Button color="secondary" size="medium" />
          <Button color="secondary" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button color="secondary" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button color="secondary" disabled size="large" />
          <Button color="secondary" disabled size="medium" />
          <Button color="secondary" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button color="secondary" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button color="secondary" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button color="secondary" disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
      </div>
    );
  };
  const _renderGhost = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold">Ghost</h2>
        <h2 className="text-f5 font-bold">Primary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="ghost" size="large" />
          <Button type="ghost" size="medium" />
          <Button type="ghost" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button type="ghost" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="ghost" disabled size="large" />
          <Button type="ghost" disabled size="medium" />
          <Button type="ghost" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button type="ghost" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f5 font-bold">Secondary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="ghost" color="secondary" size="large" />
          <Button type="ghost" color="secondary" size="medium" />
          <Button type="ghost" color="secondary" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button type="ghost" color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" color="secondary" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="ghost" color="secondary" disabled size="large" />
          <Button type="ghost" color="secondary" disabled size="medium" />
          <Button type="ghost" color="secondary" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button type="ghost" color="secondary" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" color="secondary" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button type="ghost" color="secondary" disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-8">
      <h1 className="text-f2">Buttons</h1>
      <div className="grid grid-cols-2">
        {_renderFilled()}
        {_renderGhost()}
      </div>
    </section>
  );
};
