import { HoverBorderGradient } from '@/ui/components/core/aceternity-ui/hover-border-gradient';
import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';

// import { TopGradientButton } from '@/ui/components/core/aceternity-ui/top-gradient-button';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  return (
    <div className="relative z-10 flex max-w-[80vw] flex-col items-center justify-center md:max-w-[60vw]">
      <TextGenerateEffect
        words="👋🏻 Hey there! I'm Elie,"
        className="mt-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
      />

      <TextGenerateEffect
        words="a passionate Full Stack Software Developer."
        className="mt-4 text-center text-lg font-semibold md:text-xl lg:text-2xl"
      />

      <TextGenerateEffect
        fastAnimation
        words="Welcome to my corner of the digital world!"
        className="m-4 mb-1 mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400 md:text-lg lg:text-xl"
      />

      <TextGenerateEffect
        fastAnimation
        words="From the beginning of my journey, I have been captivated by the art of crafting exceptional digital experiences. As a developer, I love turning lines of code into elegant, functional solutions. My goal is not just to create software, but to build digital marvels that seamlessly merge form and function."
        className="m-4 mb-1 text-center text-sm text-neutral-500 md:text-lg lg:text-xl"
      />

      <TextGenerateEffect
        fastAnimation
        words="What excites me most about this field is solving problems and finding solutions that work. I’m always ready to dive into new projects, learn from them, and improve. Working together with a team or tackling tasks on my own, I aim to contribute positively and make things better through my work."
        className="m-4 mb-1 mt-2 text-center text-sm text-neutral-500 md:text-lg lg:text-xl"
      />

      <TextGenerateEffect
        fastAnimation
        words="Through this website, I aim to share my insights, experiences, and creations with you. Whether you're a fellow developer seeking solutions, or simply someone who appreciates the finer aspects of design, there's something here for you."
        className="mb-12mt-2 m-4 text-center text-sm text-neutral-500 md:text-lg lg:text-xl"
      />

      <TextGenerateEffect
        words="Let's build something amazing together!"
        className="m-4 mb-8 text-center text-lg font-semibold md:text-xl lg:text-2xl"
      />

      <a href="mailto:eliecyammine@gmail.com">
        {/* <TopGradientButton title="Get in touch!" /> */}
        <HoverBorderGradient>Get in touch!</HoverBorderGradient>
      </a>
    </div>
  );
}
