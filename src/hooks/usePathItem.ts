import { useLocation } from "react-router-dom"

export const usePathItem = (index = 2): string => {
  const { pathname } = useLocation()
  const paths = pathname.split('/');
  return paths.at(index) ?? '';
}