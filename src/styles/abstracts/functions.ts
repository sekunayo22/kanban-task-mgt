export function toRem(size: number) {
  const remSize = size / 16;
  return `${remSize}rem`;
}

export function toEm(size: number) {
  const emSize = size / 16;
  return `${emSize}em`;
}
