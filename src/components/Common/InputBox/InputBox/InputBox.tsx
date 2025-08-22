import { useState } from "react";

/* Icons */
import MicIcon from "../../../../assets/Icons/MicIcon.js";
import BoldIcon from "../../../../assets/Icons/BoldIcon.js";
import PlusIcon from "../../../../assets/Icons/PlusIcon.js";
import VideIcon from "../../../../assets/Icons/VideIcon.js";
import TrashIcon from "../../../../assets/Icons/TrashIcon.js";
import EmojiIcon from "../../../../assets/Icons/EmojiIcon.js";
import QuotesIcon from "../../../../assets/Icons/QuotesIcon.js";
import ScriptIcon from "../../../../assets/Icons/ScriptIcon.js";
import PublishIcon from "../../../../assets/Icons/PublishIcon.js";
import ItalicsIcon from "../../../../assets/Icons/ItalicsIcon.js";
import ArrowDownIcon from "../../../../assets/Icons/ArrowDownIcon.js";
import UnderLineIcon from "../../../../assets/Icons/UnderLineIcon.js";
import OrderedListIcon from "../../../../assets/Icons/OrderedListIcon.js";
import UnorderedListIcon from "../../../../assets/Icons/UnorderedListIcon.js";

interface InputBoxProps {
  value: string;
  setValue: (val: string) => void;
  onClick?: () => void; 
}

export default function InputBox({ value, setValue, onClick }: InputBoxProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emoji: string) => {
    setValue(value + emoji);
  };

   const handleInteraction = () => {
   
       alert("Function not implemented");
     
   };

  return (
    <div className=" w-[56.8rem] h-[22.4rem] bg-[rgba(0,0,0,0.03)] rounded-[2.1rem] flex items-center justify-center">
      <div
        className={` w-[55.4rem] h-[21rem] bg-white border border-[rgba(0,0,0,0.13)] shadow-[0px_0.4rem_0.4rem_rgba(0,0,0,0.05)] rounded-[1.8rem] flex flex-col`}
      >
        <div
          onClick={handleInteraction}
          className="flex items-center justify-between p-4"
        >
          <span className="w-fit bg-[rgba(0,0,0,0.03)] rounded-[1rem] inline-block flex p-[0.4rem]">
            <span className="flex items-center justify-between gap-[1.125rem]">
              <button className=" h-full bg-white shadow-[0_0.1rem_0.7rem_rgba(0,0,0,0.09)] rounded-[0.7rem] flex items-center justify-center p-[0.5rem] text-[0.85rem] leading-[0.9375rem] font-medium text-[rgba(0,0,0,0.81)] font-inter gap-[0.625rem] mr-[0.9375rem]">
                Paragraph <ArrowDownIcon />
              </button>
              <button className="h-full bg-white shadow-[0_0.1rem_0.7rem_rgba(0,0,0,0.09)] rounded-[0.7rem] flex items-center justify-center py-[0.5rem] px-[0.85rem]">
                <BoldIcon />
              </button>
              <button>
                <ItalicsIcon />
              </button>
              <button>
                <UnderLineIcon />
              </button>
            </span>
            <div className="h-100% border-l border-[rgba(0,0,0,0.1)] mx-4"></div>

            <span className="flex items-center justify-between gap-[1.125rem] px-[1.5rem] ">
              <button>
                <UnorderedListIcon />
              </button>
              <button>
                <OrderedListIcon />
              </button>
            </span>

            <div className="h-100% border-l border-[rgba(0,0,0,0.1)] mx-4"></div>

            <span className="flex items-center justify-between gap-[1.125rem] px-[1.5rem] ">
              <button>
                <QuotesIcon />
              </button>
              <button>
                <ScriptIcon />
              </button>
            </span>
          </span>

          <span>
            <button className="w-[4rem] p-[0.75rem] bg-[rgba(255,0,0,0.15)] rounded-[1rem] -scale-x-100 inline-flex items-center justify-center">
              <TrashIcon />
            </button>
          </span>
        </div>

        <div className="relative flex-1 p-4">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute top-2 right-5 z-10"
          >
            <EmojiIcon />
          </button>

          {showEmojiPicker && (
            <div className="absolute top-10 right-2 bg-white shadow-md p-2 rounded flex gap-2 flex-wrap max-h-32 overflow-auto z-20">
              {["😀", "😂", "😍", "😎", "👍"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => {
                    addEmoji(emoji);
                    setShowEmojiPicker(false);
                  }}
                  className="hover:bg-gray-200 rounded p-1"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          <textarea
            className="w-full h-full font-inter font-medium text-[1.25rem] leading-[1.75rem] placeholder-black/40 resize-none bg-transparent border-0 outline-none pr-10"
            placeholder="What's on your mind?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {/* Bottom div */}
        <div className="border-t border-t-[#D9D9D9] w-full p-[0.5625rem] flex items-center justify-between">
          <span
            onClick={handleInteraction}
            className="flex items-center justify-between gap-[1.125rem]"
          >
            <button className=" bg-[rgba(0,0,0,0.06)] rounded-[0.625rem]  p-[0.375rem] flex items-center justify-center">
              <PlusIcon />
            </button>
            <button>
              <MicIcon />
            </button>
            <button>
              <VideIcon />
            </button>
          </span>
          <span>
            <button onClick={onClick}>
              <PublishIcon />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
