import PostTag from "./post-tag";
import Image from "next/image";
const PostHeader = ({ meta }) => {
  return (
    <div>
      <div className="space-y-2 mb-6">
        {/* top post data info container */}
        <h1 className=" text-xl md:text-3xl font-Architects_Daughter text-main-blue font-bold text-center px-[10%]">
          {meta.title}
        </h1>
        <div className="flex justify-center space-x-2 items-center ">
          <div className="flex space-x-1">
            {meta.tags.map((tag) => (
              <PostTag key={tag} title={tag} />
            ))}
          </div>
          <span className="text-sm text-main-gray font-medium">
            {meta.date}
          </span>
        </div>
        <div>
          <h2 id="intro" className="text-main-blue text-center text-xl md:text-2xl font-semibold my-2">Intro</h2>
        <p className="font-normal text-base text-main-blue text-center px-3 sm:px-[10%] lg:px-[20%]">
          {meta.intro}
        </p>
        </div>
      </div>

      {/* Post Hero Img  */}
      <div className="text-center max-w-[760px] mx-auto">
        <Image
          priority={true}
          src={meta.img}
          width={"760"}
          height={"350"}
          sizes={"760"}
          alt={meta.title + " img"}
          objectFit="contain"
          objectPosition={"center"}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default PostHeader;
