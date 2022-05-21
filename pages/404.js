import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className="container grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 place-content-center items-center h-screen">
      {/* text */}
      <div className="text-main-blue font-medium flex flex-col items-center sm:items-start">
        <h2 className="font-semibold text-6xl sm:text-7xl">404</h2>
        <span className="text-3xl">Ooops!</span>
        <span className="text-3xl">Page Not Found</span>
        <p className="font-normal text-base text-main-gray">
          This page doesn't exist or was remooved! I sedgest you back to home
        </p>

        <Link href="/blog">
          <a className="w-fit bg-main-blue transition hover:bg-dark-bg-blue text-white p-4 mt-4 rounded-lg">
            Back Home
          </a>
        </Link>
      </div>
      {/* img */}
      <div>
        <Image
          src="/404_img.png"
          width="1200"
          height="1200"
          alt="404 page img"
          draggable='false'
        />
      </div>
    </div>
  );
}
