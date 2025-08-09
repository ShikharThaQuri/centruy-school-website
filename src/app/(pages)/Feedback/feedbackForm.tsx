"use client";

import { FormEvent, useState } from "react";

const emojiDivStyle = "flex flex-col items-center";
const emojiStyle =
  "md:text-[2.5rem] text-[1.5rem] cursor-pointer grayscale transform transition duration-[0.25s] ease-in-out hover:translate-y-[-10px] hover:scale-[1.1] hover:grayscale-0";

const emojiTextStyle = "font-bold text-[0.8rem] md:text-[1rem]";

export default function FeedbackForm() {
  const [feedbackMsg, setFeedbackMsg] = useState<string>("");
  const [feedbackThankMsg, setFeedbackThankMsg] = useState<boolean>(false);

  const [terrible, setTerrible] = useState<boolean>(false);
  const [bad, setBad] = useState<boolean>(false);
  const [okey, setOkey] = useState<boolean>(false);
  const [good, setGood] = useState<boolean>(false);
  const [excellent, setExecellent] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!terrible && !bad && !okey && !good && !excellent) {
      setErrorMsg("You must select a emoji avobe before Submit!!");
      return;
    }

    setErrorMsg("");
    setFeedbackThankMsg(true);

    setTimeout(() => {
      setFeedbackThankMsg(false);
    }, 2000);

    setTerrible(false);
    setBad(false);
    setOkey(false);
    setGood(false);
    setExecellent(false);

    setFeedbackMsg("");
  };

  return (
    <>
      {feedbackThankMsg ? (
        <div className="z-50 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <div className="md:w-[20rem] w-[15rem] bg-white md:h-[20rem] h-[15rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg shadow-xl/30">
            <span className="text-[3rem]">🥰</span>
            <h1 className="font-bold md:text-[2rem] text-[1.5rem]">
              Thank You!!!
            </h1>
          </div>
        </div>
      ) : (
        ""
      )}

      <section className="flex justify-center items-center gap-[1.2rem] md:gap-[2rem] my-[2rem]">
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
            😍
          </span>
          <p className={`${emojiTextStyle}`}>Excellent</p>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <textarea
          name="feedback msg"
          id=""
          rows={5}
          value={feedbackMsg}
          onChange={(e) => setFeedbackMsg(e.target.value)}
          required
          placeholder="Your Thougths!!"
          className="md:w-[30rem] w-[20rem] block px-3 py-2 mb-[1rem] border inset-shadow-sm border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 "
        />

        <button className="cursor-pointer md:w-[30rem] w-[20rem] py-[0.8rem] py-[1rem] text-[1.2rem] text-white rounded bg-linear-to-bl from-violet-800 to-fuchsia-600">
          Submit Feedback
        </button>
      </form>

      {errorMsg ? (
        <h1 className="text-[red] w-[20rem] md:w-[30rem] text-[0.5rem] md:text-[1rem] mt-[0.5rem] text-right ">
          {errorMsg}
        </h1>
      ) : (
        ""
      )}
    </>
  );
}
