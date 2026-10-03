// Anything that leaves the site: absolute http(s) URLs and mail links. A
// prefix check rather than `includes("http")`, which would also match an
// internal path that merely contains the word.
const isExternal = (href: string): boolean => /^(?:https?:|mailto:)/.test(href)

export default isExternal
