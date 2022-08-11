const isRouteActive = (route: string) => {
  //   return true if the route is active
  const isActive =
    route === window.location.pathname ||
    window.location.pathname.includes(route)
  return isActive
}

const useMenu = () => {
  const menu = [
    { label: 'About Us', route: '/about', active: isRouteActive('/about') },
    {
      label: 'Expertise',
      route: '/expertise',
      active: isRouteActive('/expertise'),
    },
    { label: 'Posts & News', route: '/posts', active: isRouteActive('/posts') },
    { label: 'Contact Us', route: '/contact', active: isRouteActive('/contact') },
  ]
  return menu
}

export default useMenu
 