import React from "react";

const ShowcaseSection: React.FC = () => {
  return (
    <div className="images-container relative overflow-hidden perspective:800px w-full min-h-[12rem] flex items-end px-6 bg-gradient-to-b from-transparent to-gray-100">
      <div
        className="relative z-20 flex items-end justify-center mx-auto -mb-20 md:-mb-20"
        style={{
          transform: "translateY(29.6281px) rotateX(0deg) translateZ(0px)",
        }}
      >
        <img
          alt="hero"
          draggable="false"
          loading="lazy"
          width={1400}
          height={720}
          decoding="async"
          data-nimg="1"
          className="transition duration-300 blur-0 rounded-2xl object-contain mx-auto"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Fhero-new.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fimages%2Fhero-new.png&amp;w=3840&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Fhero-new.png&amp;w=3840&amp;q=75"
        />
      </div>
      <span className="absolute z-[40] h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__n28nw bottom-0"></span>

      <div className="flex flex-row gap-10 items-center flex-wrap p-4 w-full justify-center relative z-20 py-10">
        <img
          alt="Next JS"
          draggable="false"
          loading="lazy"
          width={120}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          src="/images/logos/nextjs2.svg"
        />
        <img
          alt="React"
          draggable="false"
          loading="lazy"
          width={60}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Freact.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Freact.png&amp;w=128&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Freact.png&amp;w=128&amp;q=75"
        />
        <img
          alt="Node JS"
          draggable="false"
          loading="lazy"
          width={120}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Fnode.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Fnode.png&amp;w=256&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Fnode.png&amp;w=256&amp;q=75"
        />
        <img
          alt="Tailwind CSS"
          draggable="false"
          loading="lazy"
          width={200}
          height={80}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Ftailwind.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Ftailwind.png&amp;w=640&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Ftailwind.png&amp;w=640&amp;q=75"
        />
        <img
          alt="Framer motion"
          draggable="false"
          loading="lazy"
          width={60}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Fframer.webp&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Fframer.webp&amp;w=128&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Fframer.webp&amp;w=128&amp;q=75"
        />
        <img
          alt="Figma"
          draggable="false"
          loading="lazy"
          width={80}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          src="/images/logos/figma2.svg"
        />
        <img
          alt="Sanity"
          draggable="false"
          loading="lazy"
          width={80}
          height={80}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          src="/images/logos/sanity.svg"
        />
        <img
          alt="Vercel"
          draggable="false"
          loading="lazy"
          width={120}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Fvercel.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Fvercel.png&amp;w=256&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Fvercel.png&amp;w=256&amp;q=75"
        />
        <img
          alt="AWS"
          draggable="false"
          loading="lazy"
          width={60}
          height={60}
          decoding="async"
          data-nimg="1"
          className="lg:aspect-1 lg:object-contain"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Fimages%2Flogos%2Faws.webp&amp;w=64&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogos%2Faws.webp&amp;w=128&amp;q=75 2x"
          src="/_next/image?url=%2Fimages%2Flogos%2Faws.webp&amp;w=128&amp;q=75"
        />
      </div>
    </div>
  );
};

export default ShowcaseSection;
