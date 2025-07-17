import { Suspense } from "react";

export default function GalleryPage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Gallery</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <GalleryBox />
      </Suspense>
    </main>
  );
}

async function GalleryBox() {
  // const result = await getProducts();

  return (
    <>
      {/* {result?.data?.map((items: ProductType, i: number) => ( */}
      <div
        // key={i}
        className="bg-white rounded shadow-md p-4 mb-5 flex justify-between w-[50%] items-center"
      >
        <h2>Gallery Name</h2>
        <p>edit & delete</p>
      </div>
      {/* ))} */}
    </>
  );
}
