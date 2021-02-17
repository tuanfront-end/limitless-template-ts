import Button from "components/Button/Button";
import React from "react";

const ComponentButtonsPage = () => {
  const _renderFilled = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold dark:text-white">Filled</h2>
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
      </div>
    );
  };
  const _renderGhost = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold dark:text-white">Ghost</h2>
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
      </div>
    );
  };
  const _renderBorderLess = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold dark:text-white">Border Less</h2>
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
      </div>
    );
  };
  const _renderRound = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-f4 font-bold dark:text-white">Round</h2>
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
      </div>
    );
  };

  return (
    <div className="ttnc-ComponentButtonsPage bg-white dark:bg-black">
      <div className="py-20 px-4 max-w-body mx-auto space-y-20">
        <h1 className="text-f2 dark:text-white font-bold">Buttons</h1>
        <div className="space-y-20">
          {_renderFilled()}
          {_renderGhost()}
          {_renderRound()}
          {_renderBorderLess()}
        </div>
      </div>
    </div>
  );
};

export default ComponentButtonsPage;
