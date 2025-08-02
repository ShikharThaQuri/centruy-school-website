export default function MapSection() {
  return (
    <div className=" py-[2rem] md:py-[5rem] flex flex-col items-center">
      <h1 className="text-[#fb5607] text-[2rem] font-bold mb-[3rem]">
        School Location
      </h1>
      <div className="w-full max-w-[1200px] lg:h-[60vh] md:h-[50vh] h-[40vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35440.0394228264!2d81.67516710323477!3d28.20435657991361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998655b45af4323%3A0x76578af35d59e04c!2sCentury%20Educational%20Academy!5e0!3m2!1sen!2snp!4v1714051688373!5m2!1sen!2snp"
          // width="600"
          // height="450"
          className="w-full h-full"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
