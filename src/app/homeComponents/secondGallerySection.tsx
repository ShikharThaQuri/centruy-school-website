import { Suspense } from "react";
import SwiperGallery from "./swiperGallerySection";

export default function GallerySection() {
  return (
    <section>
      <Suspense fallback={<h1>Loading....</h1>}>
        <SwiperGallery />
      </Suspense>
    </section>
  );
}
