export function getNumberWithComma(value: any) {
  value = String(value);
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
