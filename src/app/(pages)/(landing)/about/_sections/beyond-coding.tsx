import React from 'react';

import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

import { SocialLinkType } from '@/types/social-link.types';

import { Button } from '@/ui/components/core/shadcn-ui/button';

interface BeyondCodingProps {
  socialLinksData: SocialLinkType[] | null;
}

export default function BeyondCoding({ socialLinksData }: BeyondCodingProps) {
  return (
    <div className="relative mx-auto flex max-w-xl flex-row items-center justify-center space-x-3 pb-6 pt-4 antialiased">
      {socialLinksData!.map((data) => (
        <a
          key={data.platform}
          title={`${data.platform} Link`}
          target="_blank"
          href={`${data.url}${data.handle}`}
          aria-label={data.platform}
          rel="noopener noreferrer"
        >
          <Button variant="outline">{iconMapping[data.platform] || null}</Button>
        </a>
      ))}
    </div>
  );
}

const iconMapping: { [key: string]: JSX.Element } = {
  LinkedIn: <LinkedinIcon size={18} />,
  GitHub: <GithubIcon size={18} />,
  'X (Twitter)': <TwitterIcon size={18} />,
  Instagram: <InstagramIcon size={18} />,
};
