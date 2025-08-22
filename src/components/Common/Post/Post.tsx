/* Icons */
import SendIcon from "../../../assets/Icons/SendIcon";
import HeartIcon from "../../../assets/Icons/HeartIcon";
import CommentIcon from "../../../assets/Icons/CommentIcon";

/* Constant - utils */
import { timeAgo } from "../../../utils/Time";
import { formatNameFromEmail } from "../../../utils/FormatEmail";

interface PostProps {
  email: string;
  content: string;
  createdAt: Date | string | number;
  emoji?: string;
  imageUrl?: string;
}

export default function Post({
  email,
  content,
  createdAt,
  emoji,
  imageUrl,
}: PostProps) {
  const name = formatNameFromEmail(email);

  const handleInteraction = () => {
    alert("Function not implemented");
  };

  return (
    <div className="w-[56.8rem]  bg-[rgba(0,0,0,0.03)] rounded-[2.1rem] flex flex-col items-center justify-center pt-[0.6375rem] px-[0.6375rem] pb-[0.75rem] ">
      <div className="w-[55.4rem] h-fit bg-white border border-[rgba(0,0,0,0.1)] shadow-[0_0.25rem_0.5625rem_rgba(0,0,0,0.05)] rounded-[1.8rem] p-4 pb-[1.375rem] flex flex-col gap-[1rem] ">
        <div className="flex gap-[0.625rem] items-center ">
          <span>
            <img
              src={imageUrl}
              alt="post"
              className="w-[30px] h-[30px] rounded-[0.5375rem] object-cover "
              style={{ minWidth: "1.875rem", minHeight: "1.875rem" }}
            />
          </span>
          <span>
            <h3 className="font-semibold text-[1rem] leading-[1.2rem] text-black">
              {name}
            </h3>
            <p className="font-medium text-[0.9rem] leading-[1.2rem] text-black/40">
              {timeAgo(createdAt)}
            </p>
          </span>
        </div>
        <div className="flex gap-[0.8125rem]">
          <span className=" h-[30px] w-[30px] flex-shrink-0 p-[0.4rem] bg-[#F2F2F2] rounded-[50%] flex justify-center items-center">
            <span>{emoji}</span>
          </span>
          <p className=" relative top-[3px] max-w-[88%] font-inter font-medium text-[1.25rem] leading-[1.8125rem] text-black/80">
            {content}
          </p>
        </div>
      </div>

      <div
        onClick={handleInteraction}
        className="w-full flex items-center  gap-[1.6875rem] ml-[2.9rem] mt-[0.7rem] "
      >
        <button>
          <HeartIcon />
        </button>

        <button>
          <CommentIcon />
        </button>

        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
