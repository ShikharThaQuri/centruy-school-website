import Image from "next/image";
import photo1 from "@/images/profile-6.jpg";
import photo2 from "@/images/profile-7.jpg";
import photo3 from "@/images/profile-9.jpg";

const imageDivStyles = "bg-gray-200 h-[15rem] rounded-lg shadow-md";

export default function GallerySection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-transparant">
      <div className={imageDivStyles}>
        <Image
          src={photo1}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo2}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo3}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo1}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>

      <div className={imageDivStyles}>
        <Image
          src={photo2}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo1}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo2}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={photo3}
          alt="Gallery Item 1"
          className="w-full h-full rounded-lg mb-4 object-cover object-center"
        />
      </div>

      {/* Add more items as needed */}
    </section>
  );
}
