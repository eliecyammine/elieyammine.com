import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

import {
  SkeletonFive,
  SkeletonFour,
  SkeletonOne,
  SkeletonThree,
  SkeletonTwo,
} from '@/ui/components/core/aceternity-ui/skeletons';

/// ---------- || ABOUT DATA || ---------- ///

export const aboutData = [
  {
    title: 'My Story',
    description: (
      <span className="text-sm">
        Innovator at heart, bridging creativity & technology with passion.
      </span>
    ),

    header: <SkeletonOne />,

    icon: <IconClipboardCopy className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },
  {
    title: 'Expertise',
    description: (
      <span className="text-sm">
        Crafting digital solutions, harmonizing aesthetics with functionality.
      </span>
    ),

    header: <SkeletonTwo />,

    icon: <IconFileBroken className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },
  {
    title: 'Journey So Far',
    description: (
      <span className="text-sm">From a curious learner to a dynamic force in the tech world.</span>
    ),

    header: <SkeletonThree />,

    icon: <IconSignature className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },
  {
    title: 'Tech Stack',
    description: (
      <span className="text-sm">
        Proficient in modern technologies including <b>React</b>, <b>Next.js</b>, <b>Node.js</b>,{' '}
        <b>PostgreSQL</b>, <b>AWS</b>, & more...
      </span>
    ),

    header: <SkeletonFour />,

    icon: <IconTableColumn className="size-4 text-neutral-500" />,

    className: 'md:col-span-2',
  },
  {
    title: 'Beyond Coding',
    description: (
      <span className="text-sm">Passionate about growth, always exploring new frontiers.</span>
    ),

    header: <SkeletonFive />,

    icon: <IconBoxAlignRightFilled className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },
];
