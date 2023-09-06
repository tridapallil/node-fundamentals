export function buildRoutePath (path) {
  const reouteParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(reouteParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}