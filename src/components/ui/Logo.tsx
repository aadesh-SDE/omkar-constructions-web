import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import logoMark from '../../assets/brand/logo-mark.png'

/** Header/footer logo lockup: the Om brand mark + "Omkar Constructions" wordmark. */
export function Logo({
  light = false,
  className,
}: {
  light?: boolean
  className?: string
}) {
  return (
    <Link to="/" className={clsx('flex items-center gap-2.5', className)}>
      <img src={logoMark} alt="" className="h-9 w-9" />
      <span className="font-heading leading-tight font-extrabold tracking-tight">
        <span className={clsx('block text-base', light ? 'text-white' : 'text-navy-900')}>
          OMKAR
        </span>
        <span className="block text-[11px] tracking-[0.2em] text-orange-500">
          CONSTRUCTIONS
        </span>
      </span>
    </Link>
  )
}
