export const ComponentRegistry = new Map()

export function registerComponent(name, fn) {
  ComponentRegistry.set(name, fn)
}

export function getComponent(name) {
  return ComponentRegistry.get(name)
}