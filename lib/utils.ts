// utils.ts

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  return doc
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

export function formatId(id: string): string {
  // Example implementation of formatId
  return id.substring(0, 8); // Trims the ID to the first 8 characters
}
