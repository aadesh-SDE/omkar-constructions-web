import type { Ref } from 'react'

type HighlightProps = {
  text: string
  highlight: string
  className?: string
  /** Optional ref onto the highlighted <span> — lets a caller measure where
   *  the highlighted word ends (e.g. to size other text against it). */
  highlightRef?: Ref<HTMLSpanElement>
}

/** Renders `text` with the first case-insensitive occurrence of `highlight`
 *  wrapped in a colored span — the accent pattern Figma uses on most H2s
 *  (e.g. "Infrastructure for a **Better Tomorrow**"), confirmed via the
 *  file's characterStyleOverrides rather than eyeballed. */
export function Highlight({ text, highlight, className, highlightRef }: HighlightProps) {
  const i = text.toLowerCase().indexOf(highlight.toLowerCase())
  if (i === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, i)}
      <span ref={highlightRef} className={className ?? 'text-orange-500'}>
        {text.slice(i, i + highlight.length)}
      </span>
      {text.slice(i + highlight.length)}
    </>
  )
}
