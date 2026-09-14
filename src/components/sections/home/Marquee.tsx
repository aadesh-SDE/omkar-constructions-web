// A section present in the Figma file between the hero and the stats bar
// that I'd originally missed: a repeating "WELCOME TO THE OMKAR
// CONSTRUCTIONS" ticker band. The static export shows 3 fixed copies (a
// snapshot of what is clearly an infinite marquee); implemented here as an
// actual CSS-animated marquee, the live equivalent of that pattern.
const REPEATS = 6

function Group() {
  return (
    <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span
          key={i}
          className="font-heading text-lg font-bold tracking-wide whitespace-nowrap text-white uppercase"
        >
          Welcome to the Omkar Constructions
          <span className="mx-8 text-white/50">•</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden bg-orange-500 py-[20px]">
      {/* Two identical groups back-to-back so a -50% translate loops seamlessly. */}
      <div className="animate-marquee flex w-max">
        <Group />
        <Group />
      </div>
    </div>
  )
}
