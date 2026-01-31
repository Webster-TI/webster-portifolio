const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" fill="none" {...props}>
    <path d="M8 14c9-5 20-5 30 0v36c-10-5-21-5-30 0V14z" fill="#FEF3C7" />
    <path d="M56 14c-9-5-20-5-30 0v36c10-5 21-5 30 0V14z" fill="#FCD34D" />
    <line
      x1="32"
      y1="14"
      x2="32"
      y2="50"
      stroke="#92400E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

export default BookIcon
