export function addClassName (el, className) {
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}
export function removeClassName (el, className) {
  el.classList.remove(className)
}
