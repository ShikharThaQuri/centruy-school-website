"use client";

import { FormEvent, useState } from "react";

export default function FeedbackForm() {
  const [feedbackMsg, setFeedbackMsg] = useState<string>("");
  const [feedbackThankMsg, setFeedbackThankMsg] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedbackThankMsg(true);

    setTimeout(() => {
      setFeedbackThankMsg(false);
    }, 2000);

    setFeedbackMsg("");
  };

  return (
    <>
      {feedbackThankMsg ? (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <div className="w-[20rem] bg-white h-[20rem] flex flex-col justify-center items-center gap-[1rem] rounded-lg shadow-xl/30">
            <span className="text-[3rem]">🥰</span>
            <h1 className="font-bold text-[2rem]">Thank You!!!</h1>
          </div>
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <textarea
          name="feedback msg"
          id=""
          rows={5}
          value={feedbackMsg}
          onChange={(e) => setFeedbackMsg(e.target.value)}
          required
          placeholder="Your Thougths!!"
          className="w-[30rem] block px-3 py-2 mb-[1rem] border inset-shadow-sm border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 "
        />

        <button className="cursor-pointer w-[30rem] py-[0.8rem] py-[1rem] text-[1.2rem] text-white rounded bg-linear-to-bl from-violet-800 to-fuchsia-600">
          Submit Feedback
        </button>
      </form>
    </>
  );
}
