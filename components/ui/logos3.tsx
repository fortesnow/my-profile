"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these technology",
  logos = [
    {
      id: "logo-1",
      description: "Next.js",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "React",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "TypeScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Tailwind CSS",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-5",
      description: "Vercel",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Figma",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Node.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-8",
      description: "GitHub",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      className: "h-7 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl text-white">
          {heading}
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-x-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={`${logo.className} filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-900 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 }; 