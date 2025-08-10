import FooterSocialLinks from "./footerSocialLinks";

const smallText =
  "text-[0.9rem] md:text-[1rem] footerMedia:text-[0.8rem] text-white";

export default function Footer() {
  return (
    <div className="mx-[-4rem] md:mx-[-7.5rem] bg-[#1b263b] py-[3rem] xl:px-[9.3rem] md:px-[7.5rem] px-[3.1rem] flex md:flex-row flex-col  justify-between md:items-center items-center gap-[3rem] md:justify-between ">
      <h1>Logo</h1>

      <div className="flex gap-[2.5rem]">
        <div>
          <h1 className="text-[1.2rem] md:text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Contact Us
          </h1>

          <div className="flex flex-col gap-y-[0.5rem] max400:items-center">
            <p className={smallText}>++ 9812489000</p>
            <p className={smallText}>++ 9812489000</p>
          </div>
        </div>

        <div>
          <h1 className="text-[1.2rem]  md:text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Socal Links
          </h1>

          <FooterSocialLinks />
        </div>
      </div>
    </div>
  );
}
