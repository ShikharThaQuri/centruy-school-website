export default function GallerySection() {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-transparant">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Gallery Item 1</h2>
        <p className="text-gray-700">Description of item 1.</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Gallery Item 2</h2>
        <p className="text-gray-700">Description of item 2.</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Gallery Item 3</h2>
        <p className="text-gray-700">Description of item 3.</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Gallery Item 4</h2>
        <p className="text-gray-700">Description of item 4.</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Gallery Item 4</h2>
        <p className="text-gray-700">Description of item 4.</p>
      </div>
      {/* Add more items as needed */}
    </section>
  );
}
