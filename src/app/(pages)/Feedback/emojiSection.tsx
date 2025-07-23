"use client";

import { useState } from "react";

const emojiDivStyle = "flex flex-col items-center";
const emojiStyle =
  "text-[2.5rem] cursor-pointer grayscale transform transition duration-[0.25s] ease-in-out hover:translate-y-[-10px] hover:scale-[1.1] hover:grayscale-0";

const emojiTextStyle = "font-bold ";

export default function EmojiSection() {
  const [terrible, setTerrible] = useState<boolean>(false);
  const [bad, setBad] = useState<boolean>(false);
  const [okey, setOkey] = useState<boolean>(false);
  const [good, setGood] = useState<boolean>(false);
  const [excellent, setExecellent] = useState<boolean>(false);

  return (
    <section className="flex justify-center items-center gap-[2rem] my-[2rem]">
      <div className={`${emojiDivStyle}`}>
        <span
          className={`${emojiStyle} ${
            terrible ? "scale-[1.1] grayscale-0 translate-y-[-10px]" : ""
          }`}
          onClick={() =>
            terrible
              ? setTerrible(false)
              : (setTerrible(true),
                setBad(false),
                setOkey(false),
                setGood(false),
                setExecellent(false))
          }
        >
          😈
        </span>
        <p className={`${emojiTextStyle}`}>Terrible</p>
      </div>

      <div className={`${emojiDivStyle}`}>
        <span
          className={`${emojiStyle} ${
            bad ? "scale-[1.1] grayscale-0 translate-y-[-10px]" : ""
          }`}
          onClick={() =>
            bad
              ? setBad(false)
              : (setTerrible(false),
                setBad(true),
                setOkey(false),
                setGood(false),
                setExecellent(false))
          }
        >
          😕
        </span>
        <p className={`${emojiTextStyle}`}>Bad</p>
      </div>

      <div className={`${emojiDivStyle}`}>
        <span
          className={`${emojiStyle} ${
            okey ? "scale-[1.1] grayscale-0 translate-y-[-10px]" : ""
          }`}
          onClick={() =>
            okey
              ? setOkey(false)
              : (setTerrible(false),
                setBad(false),
                setOkey(true),
                setGood(false),
                setExecellent(false))
          }
        >
          😇
        </span>
        <p className={`${emojiTextStyle}`}>Okey</p>
      </div>

      <div className={`${emojiDivStyle}`}>
        <span
          className={`${emojiStyle} ${
            good ? "scale-[1.1] grayscale-0 translate-y-[-10px]" : ""
          }`}
          onClick={() =>
            good
              ? setGood(false)
              : (setTerrible(false),
                setBad(false),
                setOkey(false),
                setGood(true),
                setExecellent(false))
          }
        >
          😘
        </span>
        <p className={`${emojiTextStyle}`}>Good</p>
      </div>

      <div className={`${emojiDivStyle}`}>
        <span
          className={`${emojiStyle} ${
            excellent ? "scale-[1.1] grayscale-0 translate-y-[-10px]" : ""
          }`}
          onClick={() =>
            excellent
              ? setExecellent(false)
              : (setTerrible(false),
                setBad(false),
                setOkey(false),
                setGood(false),
                setExecellent(true))
          }
        >
          😘
        </span>
        <p className={`${emojiTextStyle}`}>Excellent</p>
      </div>
    </section>
  );
}
