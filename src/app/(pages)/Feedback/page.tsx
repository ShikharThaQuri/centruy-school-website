import EmojiSection from "./emojiSection";
import FeedbackForm from "./feedbackForm";

export default function FeedbackPage() {
  return (
    <main className="min-h-[80vh] bg-[#f4f1de] py-[5rem] text-black flex flex-col justify-center items-center ">
      <div className="text-center">
        <h1 className="text-[2.5rem] font-bold">
          How do you express about <br /> our school?
        </h1>
        <p className="text-[1.5rem] text-gray-700 mt-[1rem]">
          Please let us know your thoughts
        </p>
      </div>
      <EmojiSection />
      <FeedbackForm />
    </main>
  );
}
