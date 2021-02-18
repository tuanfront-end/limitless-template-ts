import Button from "components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";

const Typographys = () => {
  return (
    <div className="mb-10 dark:text-gray-100">
      <h1 className="text-f3 md:text-f1 font-bold shadow-link-tick px-2 inline-block mb-0">
        Coats And Coffee!
      </h1>
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto dark:text-gray-100">
        <div className="event-description">
          <h2>Details</h2>
          <div className="">
            <p>
              Event description should give a quick overview of the event, what
              we will do, a little bit about the goal/mission behind it.
            </p>
            <p>
              <strong>What: </strong>Short description
            </p>
            <p>
              <strong>When: </strong>Saturday, Jan 1, 2020 from 12a – 12a
            </p>
            <p>
              <strong>Where: </strong>We will meet in the Linen Building parking
              lot
            </p>
            <p>
              <strong>Who: </strong>You and your friends! And of course our
              team:)
              <br />
              PLZ&nbsp;JOIN&nbsp;US. RSVP to this event so we know you're
              coming! We limit how many volunteers we take out on the streets
              with us so make sure to sign up soon.
            </p>
            <p>
              If you have any question, please{" "}
              <Link to="/contact">contact us</Link>!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          loading="lazy"
          src="https://images.pexels.com/photos/6205494/pexels-photo-6205494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Coats And Coffee! "
          className="mb-4"
        />
        <Button url="#root" size="small">
          Join Us!
        </Button>
      </div>
    </div>
  );
};

export default Typographys;
