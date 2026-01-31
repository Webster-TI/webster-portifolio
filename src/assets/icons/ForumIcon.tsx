const ForumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <rect x="4" y="8" width="56" height="36" rx="18" fill="#8B5CF6" />
    <path
      d="M22 44l-4 10 12-10h16c8 0 14-6 14-14S54 16 46 16H18c-8 0-14 6-14 14 0 6.6 4.3 12.2 10 13.7"
      fill="#6D28D9"
    />
    <circle cx="26" cy="30" r="2" fill="white" />
    <circle cx="32" cy="30" r="2" fill="white" />
    <circle cx="38" cy="30" r="2" fill="white" />
  </svg>
)

export default ForumIcon
