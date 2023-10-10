export function getBaseHref() {
  let baseElements = document.getElementsByTagName('base');
  if (baseElements.length > 0) {
    return baseElements[0].getAttribute('href');
  }
  return '/';
}

export function pathJoin(parts: string[], sep: string = '/') {
  const separator = sep || '/';
  parts = parts.map((part, index) => {
    if (index) {
      part = part.replace(new RegExp('^' + separator), '');
    }
    if (index !== parts.length - 1) {
      part = part.replace(new RegExp(separator + '$'), '');
    }
    return part;
  });
  return parts.join(separator);
}
