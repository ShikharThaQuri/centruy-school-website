import FooterSocialLinks from "./footerSocialLinks";

const smallText = "text-[1rem] footerMedia:text-[0.8rem] text-white";

export default function Footer() {
  return (
    <div className="bg-[#1b263b] px-[11.5rem] footerMedia:px-[5rem] py-[3.5rem] flex  justify-between max700:justify-center ">
      <h1 className="max700:hidden">Logo</h1>

      <div className="flex max400:flex-col max400:gap-y-[2.5rem]">
        <div className="ml-[5rem] max700:ml-[0]">
          <h1 className="text-[1.5rem] max400:text-[1.5rem] footerMedia:text-[1.2rem] text-[white] font-bold mb-[1rem]">
            Contact Us
          </h1>

          <div className="flex flex-col gap-y-[0.5rem] max400:items-center">
            <p className={smallText}>++ 9812489000</p>
            <p className={smallText}>++ 9812489000</p>
          </div>
        </div>

        <div className="ml-[5rem] max400:ml-[0]">
          <h1 className="text-[1.5rem]  max400:text-[1.5rem] footerMedia:text-[1.2rem] text-[white] font-bold mb-[1rem]">
            Socal Links
          </h1>

          <FooterSocialLinks />
        </div>
      </div>
    </div>
  );
}
