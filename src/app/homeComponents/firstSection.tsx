const boxStyles =
  "h-[18rem] cursor-pointer w-[15rem] mt-[-3rem] mb-[3rem] rounded-lg shadow-xl/30 hover:h-[19rem] hover:mt-[-4rem] transition-all duration-200 ";

export default function FirstSection() {
  return (
    <section className="bg-[#faedcd] flex justify-evenly ">
      <div className={`${boxStyles} bg-[#c1121f]`}>first</div>
      <div className={`${boxStyles} bg-[#0077b6]`}>second</div>
      <div className={`${boxStyles} bg-[#fb8500]`}>third</div>
    </section>
  );
}
