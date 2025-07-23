export default function FeedbackForm() {
  return (
    <form action="" className="">
      <textarea
        name="feedback msg"
        id=""
        rows={5}
        className="w-[30rem] block px-3 py-2 mb-[1rem] border inset-shadow-sm border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 "
      ></textarea>

      <button className="w-[30rem] py-[0.8rem] py-[1rem] text-[1.2rem] text-white rounded bg-linear-to-bl from-violet-800 to-fuchsia-600">
        Submit Feedback
      </button>
    </form>
  );
}
