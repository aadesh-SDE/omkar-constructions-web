import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** SPA route changes reuse the same document, so the previous page's
 *  scroll offset would otherwise carry over (e.g. opening a new page
 *  already scrolled to the footer). Reset to the top on every path. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
