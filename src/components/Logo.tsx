import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 32"
      preserveAspectRatio="xMidYMid meet"
      className={cn('fill-current', className)}
    >
      <text
        x="0"
        y="24"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="bold"
        className="text-foreground"
      >
        Sign
      </text>
      <rect x="78" y="0" width="48" height="32" rx="8" className="text-primary" fill="currentColor" />
      <text
        x="88"
        y="24"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="bold"
        className="text-primary-foreground"
      >
        AI
      </text>
    </svg>
  );
}
