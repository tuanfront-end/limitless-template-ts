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
          <Button isOnlyIcon size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon size="small">
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
          <Button isOnlyIcon disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon disabled size="small">
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
          <Button isOnlyIcon color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon color="secondary" size="small">
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
          <Button isOnlyIcon color="secondary" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon color="secondary" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon color="secondary" disabled size="small">
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
          <Button isOnlyIcon type="ghost" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" size="small">
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
          <Button isOnlyIcon type="ghost" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" disabled size="small">
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
          <Button isOnlyIcon type="ghost" color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="ghost" color="secondary" size="small">
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
          <Button
            isOnlyIcon
            type="ghost"
            color="secondary"
            disabled
            size="large"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="ghost"
            color="secondary"
            disabled
            size="medium"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="ghost"
            color="secondary"
            disabled
            size="small"
          >
            <i className="las la-plus"></i>
          </Button>
        </div>
      </div>
    );
  };
  const _renderBorderLess = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold">Border Less</h2>
        <h2 className="text-f5 font-bold">Primary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="borderless" size="large" />
          <Button type="borderless" size="medium" />
          <Button type="borderless" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="borderless" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="borderless" disabled size="large" />
          <Button type="borderless" disabled size="medium" />
          <Button type="borderless" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="borderless" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f5 font-bold">Secondary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="borderless" color="secondary" size="large" />
          <Button type="borderless" color="secondary" size="medium" />
          <Button type="borderless" color="secondary" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="borderless" color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="borderless" color="secondary" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="borderless" color="secondary" disabled size="large" />
          <Button type="borderless" color="secondary" disabled size="medium" />
          <Button type="borderless" color="secondary" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button
            isOnlyIcon
            type="borderless"
            color="secondary"
            disabled
            size="large"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="borderless"
            color="secondary"
            disabled
            size="medium"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="borderless"
            color="secondary"
            disabled
            size="small"
          >
            <i className="las la-plus"></i>
          </Button>
        </div>
      </div>
    );
  };
  const _renderRound = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold">Round</h2>
        <h2 className="text-f5 font-bold">Primary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="round" size="large" />
          <Button type="round" size="medium" />
          <Button type="round" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="round" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="round" disabled size="large" />
          <Button type="round" disabled size="medium" />
          <Button type="round" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="round" disabled size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" disabled size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" disabled size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f5 font-bold">Secondary</h2>
        <h2 className="text-f6 font-bold">Default:</h2>
        <div className="flex items-center space-x-8">
          <Button type="round" color="secondary" size="large" />
          <Button type="round" color="secondary" size="medium" />
          <Button type="round" color="secondary" size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button isOnlyIcon type="round" color="secondary" size="large">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" color="secondary" size="medium">
            <i className="las la-plus"></i>
          </Button>
          <Button isOnlyIcon type="round" color="secondary" size="small">
            <i className="las la-plus"></i>
          </Button>
        </div>
        <h2 className="text-f6 font-bold">Disabled:</h2>
        <div className="flex items-center space-x-8">
          <Button type="round" color="secondary" disabled size="large" />
          <Button type="round" color="secondary" disabled size="medium" />
          <Button type="round" color="secondary" disabled size="small" />
        </div>
        <div className="flex items-center space-x-8">
          <Button
            isOnlyIcon
            type="round"
            color="secondary"
            disabled
            size="large"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="round"
            color="secondary"
            disabled
            size="medium"
          >
            <i className="las la-plus"></i>
          </Button>
          <Button
            isOnlyIcon
            type="round"
            color="secondary"
            disabled
            size="small"
          >
            <i className="las la-plus"></i>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-8">
      <h1 className="text-f2">Buttons</h1>
      <div className="space-y-8">
        {_renderBorderLess()}
        {_renderRound()}
        {_renderFilled()}
        {_renderGhost()}
      </div>
    </section>
  );
};
