import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';
import { TopGradientButton } from '@/ui/components/core/aceternity-ui/top-gradient-button';
import Globe from '@/ui/components/others/Globe';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  return (
    <div className="pt-28 md:pt-20">
      <div className="relative z-10 flex max-w-[80vw] flex-col items-center justify-center md:max-w-[60vw]">
        <TextGenerateEffect
          words="Hey there!"
          className="text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        />

        <TextGenerateEffect
          words="I'm Elie, a Full Stack Software Developer crafting seamless web and mobile experiences that captivate and engage. Let's build something amazing together!"
          className="my-4 mb-8 text-center text-sm md:text-lg lg:text-2xl"
        />

        <a href="mailto:eliecyammine@gmail.com">
          <TopGradientButton title="Get in touch!" />
        </a>
      </div>

      <div className="fixed inset-0 h-screen">
        <Globe />
      </div>
    </div>
  );
}
