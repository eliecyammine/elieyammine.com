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
    slug: 'my-story',

    sectionTitle: '<MyStory />',

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
    slug: 'expertise',

    sectionTitle: '<Expertise />',

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
    slug: 'journey-so-far',

    sectionTitle: '<JourneySoFar />',

    title: 'Journey So Far',
    description: (
      <span className="text-sm">From a curious learner to a dynamic force in the tech world.</span>
    ),

    header: <SkeletonThree />,

    icon: <IconSignature className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },

  {
    slug: 'tech-stack',

    sectionTitle: '<TechStack />',

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
    slug: 'beyond-coding',

    sectionTitle: '<BeyondCoding />',

    title: 'Beyond Coding',
    description: (
      <span className="text-sm">Passionate about growth, always exploring new frontiers.</span>
    ),

    header: <SkeletonFive />,

    icon: <IconBoxAlignRightFilled className="size-4 text-neutral-500" />,

    className: 'md:col-span-1',
  },
];

export const experienceData = [
  {
    slug: 'freelance-full-stack-software-developer',

    position: 'Full Stack Software Developer',
    description: (
      <ul className="space-y-2 font-light text-neutral-700 dark:text-neutral-300">
        <li>
          Independently worked on personal projects and collaborated with clients to develop
          innovative applications using React, Next.js, Node.js, NestJS, Flutter, PostgreSQL, and
          more...
        </li>
        <li>
          Successfully delivered high-quality solutions while maintaining effective communication
          and meeting project deadlines.
        </li>
      </ul>
    ),

    company: 'Freelance Software Developer',
    location: '(Remote | Lebanon)',

    fromDate: '2019',
    toDate: 'Present',
  },

  {
    slug: 'endspace-mena',

    position: 'Software & DevOps Engineer',
    description: (
      <ul className="space-y-2 font-light text-neutral-700 dark:text-neutral-300">
        <li>
          Successfully contributed to the design and implementation of various projects for
          international clients, including prominent Australian companies.
        </li>
        <li>
          Utilized React, Next.js, Node.js, NestJS, Postgres, and MySQL to deliver high-quality
          solutions.
        </li>
        <li>
          Maintained effective communication and met project deadlines, ensuring client
          satisfaction.
        </li>
        <li>Demonstrated expertise in deploying and managing AWS and Azure infrastructure.</li>
        <li>Proficient in utilizing WHM for server management.</li>
        <li>Implemented CI/CD pipelines to streamline the software development lifecycle.</li>
      </ul>
    ),

    company: 'EndSpace Mena',
    location: '(Hybrid | NDU Innovation Bldg, Dbayeh, Lebanon)',

    fromDate: '2022',
    toDate: '2023',
  },

  {
    slug: 'freelance-visual-designer',

    position: 'Visual Designer',
    description: (
      <ul className="space-y-2 font-light text-neutral-700 dark:text-neutral-300">
        <li>
          Highly skilled in utilizing Adobe Illustrator and Figma ot create captivating graphics,
          logos, and UI/UX designs.
        </li>
        <li>
          Collaborated with diverse clients to deliver visually stunning and user-friendly
          interfaces, showcasing a strong eye for detail and design principles.
        </li>
      </ul>
    ),

    company: 'Freelance Visual Designer',
    location: '(Remote | Lebanon)',

    fromDate: '2018',
    toDate: '2020',
  },

  {
    slug: 'the-techshop',

    position: 'Owner & Store Manager',
    description: (
      <ul className="space-y-2 font-light text-neutral-700 dark:text-neutral-300">
        <li>
          Successfully managed TheTechShop, a technology-based store offering comprehensive hardware
          and software services.
        </li>
        <li>
          Oversaw services including mobile and computer repairs, internet setup, CCTV installation,
          and sales of accessories.
        </li>
        <li>
          Demonstrated strong business management skills in ensuring customer satisfaction and
          efficient operations.
        </li>
      </ul>
    ),

    company: 'TheTechShop',
    location: '(Nahr Ibrahim, Lebanon)',

    fromDate: '2018',
    toDate: '2021',
  },
];

export const educationData = [
  {
    slug: 'bachelor-in-computer-science',

    major: "Bachelor's Degree in Computer Science",

    universityAbv: 'AUL',
    university: '(Arts, Sciences and Technology University in Lebanon)',

    fromDate: '2016',
    toDate: '2020',
  },
];

export const expertiseData = [
  {
    title: 'Full-Stack Development',
  },
  {
    title: 'Software Architecture Design',
  },
  {
    title: 'Visual Design',
  },
  {
    title: 'Task Management and Prioritization',
  },
  {
    title: 'Business Management',
  },
  {
    title: 'Research and Analysis',
  },
  {
    title: 'Efficient Collaboration',
  },
];

export const techStackData = [
  {
    title: 'HTML',

    image: '',
  },

  {
    title: 'CSS',

    image: '',
  },

  {
    title: 'Javascript',

    image: '',
  },

  {
    title: 'React',

    image: '',
  },

  {
    title: 'Node.js',

    image: '',
  },

  {
    title: 'Next.js',

    image: '',
  },

  {
    title: 'NestJs',

    image: '',
  },

  {
    title: 'Tailwind',

    image: '',
  },

  {
    title: 'Framer M.',

    image: '',
  },

  {
    title: 'Dart',

    image: '',
  },

  {
    title: 'Flutter',

    image: '',
  },

  {
    title: 'PostgreSQL',

    image: '',
  },

  {
    title: 'MySQL',

    image: '',
  },

  {
    title: 'Vercel',

    image: '',
  },

  {
    title: 'AWS',

    image: '',
  },

  {
    title: 'Azure',

    image: '',
  },

  {
    title: 'GCP',

    image: '',
  },

  {
    title: 'WHM',

    image: '',
  },

  {
    title: 'Git',

    image: '',
  },

  {
    title: 'GitHub',

    image: '',
  },

  {
    title: 'Bitbucket',

    image: '',
  },

  {
    title: 'Adobe (AI)',

    image: '',
  },

  {
    title: 'Figma',

    image: '',
  },
];
