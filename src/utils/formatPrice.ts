export function formatPrice(price: number) {
  // Formatado como decimal por conta do R$ ser formatado de modo diferente.
  return new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2
  }).format(price);
};