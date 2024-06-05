import { DownloadIcon } from 'lucide-react';

const ResumeButtonCTA = () => {
  const publicResumeUrl =
    'https://fqenxrzqqqdtpnvtoguz.supabase.co/storage/v1/object/public/public-bucket/resume/Elie_Yammine_-_Resume.pdf';

  const handleClick = () => {
    window.open(publicResumeUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="relative !cursor-pointer rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
    >
      <div className="flex flex-row items-center gap-2">
        <DownloadIcon size={16} />

        <span>Resume</span>
      </div>

      <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </button>
  );
};

export default ResumeButtonCTA;
