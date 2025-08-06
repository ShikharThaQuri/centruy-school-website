const animateSpin =
  "animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full";

export default function Loading() {
  return (
    <>
      <svg className={animateSpin} viewBox="0 0 24 24"></svg>
      Loading....
    </>
  );
}
