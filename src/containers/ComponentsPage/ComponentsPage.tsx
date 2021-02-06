import Input from "components/Input/Input";
import Modal from "components/Modal/Modal";
import SearchInput from "components/SearchInput/SearchInput";
import React from "react";
import { Alerts } from "./Alerts";
import { Avatars } from "./Avatars";
import { Buttons } from "./Buttons";
import Cards from "./Cards";
import Dropdowns from "./Dropdowns";
import Forms from "./Forms";
import Messages from "./Messages";

export const ComponentsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="container">
        <div className="space-y-8 md:space-y-9">
          {/* <Alerts /> */}
          {/* <Avatars /> */}
          {/* <Buttons /> */}
          {/* <Cards /> */}
          {/* <Dropdowns /> */}
          {/* <Messages /> */}
          {/* <Modal /> */}
          {/* <SearchInput /> */}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Hello my name tuan
          </a>
          <div>
            <Forms />
          </div>
        </div>
      </div>
    </div>
  );
};
