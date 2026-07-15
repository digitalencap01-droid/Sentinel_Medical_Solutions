import { useLocation } from 'react-router-dom'

const dedicatedRoutes: Record<string, string> = {
  '#capabilities': '/capabilities',
  '#global-reach': '/global-reach',
  '#operations': '/operations',
  '#partnerships': '/partnerships',
  '#supply': '/supply',
  '#leadership': '/leadership',
  '#advisory-board': '/advisory-board',
  '#clients': '/clients',
  '#why-sentinel': '/why-sentinel',
  '#contact': '/contact',
}

export function resolveSectionHref(pathname: string, hash: string) {
  if (dedicatedRoutes[hash]) {
    return dedicatedRoutes[hash]
  }

  return pathname === '/' ? hash : `/${hash}`
}

export function useSectionHref(hash: string) {
  const { pathname } = useLocation()
  return resolveSectionHref(pathname, hash)
}

export function useHomeHref() {
  const { pathname } = useLocation()
  return pathname === '/' ? '#top' : '/'
}
