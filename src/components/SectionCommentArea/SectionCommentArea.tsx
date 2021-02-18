import Comment from "components/Comment/Comment";
import Input from "components/Input/Input";
import Textarea from "components/Textarea/Textarea";
import React from "react";

export default function SectionCommentArea({ containerClassName = "" }) {
  return (
    <div className={`ttnc-SectionCommentArea ${containerClassName}`}>
      <h5 className="text-f5 mb-5">Response (30)</h5>
      <form className="mb-8" action="">
        <Textarea name="comment-name" placeholder="What are your thought?" />
      </form>
      <ul className="comments space-y-8">
        <li>
          <Comment />
          <ul className="children ml-2 md:ml-13 my-8 pl-4 md:pl-5 pr-2 border-l-2 border-gray-300 space-y-8">
            <li>
              <Comment avatarSize="w-10 h-10" />
            </li>
            <li>
              <Comment avatarSize="w-10 h-10" />
            </li>
            <li>
              <Comment avatarSize="w-10 h-10" />
            </li>
          </ul>
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
      </ul>
    </div>
  );
}
