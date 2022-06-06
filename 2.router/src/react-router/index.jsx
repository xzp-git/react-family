import React from "react";

const NavigationContext = React.createContext();
const LocationContext = React.createContext();

export function Router({ children, location, navigationType, navigator }) {
  return (
    <NavigationContext.Provider value={{ navigator }}>
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    </NavigationContext.Provider>
  );
}
export function Route() {
  return null;
}
export function Routes({ children }) {
  return useRoutes(createRoutesFromChildren(children));
}

export function createRoutesFromChildren(children) {
  const routes = [];
  React.Children.forEach(children, (child) => {
    let route = {
      path: child.props.path,
      element: child.props.element,
    };
    routes.push(route);
  });

  return routes;
}

export function useLocation() {
  return React.useContext(LocationContext).location;
}

export function compilePath(path) {
  let regexpSource = "^" + path;
  regexpSource += "$";
  const matcher = new RegExp(regexpSource);
  return matcher;
}
export function matchPath(path, pathname) {
  let matcher = compilePath(path);
  let [name, query] = pathname.split("?");
  let match = name.match(matcher);
  if (!match) return null;
  return match;
}

export function useRoutes(routes) {
  const location = useLocation();
  const pathname = location.pathname;
  for (let i = 0; i < routes.length; i++) {
    const { path, element } = routes[i];
    let match = matchPath(path, pathname);
    if (match) {
      return element;
    }
  }
  return null;
}

export function useSearchParams() {
  const location = React.useContext(LocationContext).location;
  const pathname = location.pathname;
  return new URLSearchParams(pathname.split("?")[1]);
}
