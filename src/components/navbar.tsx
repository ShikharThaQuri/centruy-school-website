export default function Navbar() {
  return (
    <nav className="bg-[#faedcd] ">
      <div className="text-center pt-4 px-[3rem] text-white">
        <h1 className="text-[23px] tablet:text-[25px] max400:text-[20px] font-bold text-[#0096C7] ">
          CENTURY EDUCATION ACADEMY SCHOOL
        </h1>

        <h3 className="text-[15px] tablet:text-[15px] max400:text-[12px] font-bold text-[#07617E]">
          Kohalpur 3, Banke
        </h3>
      </div>

      <div className="flex items-center justify-between py-4 px-[3rem] text-black font-bold text-[17px]">
        <h1>My Navbar</h1>
        <ul className="flex space-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
