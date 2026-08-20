/**
 * Design reminder — assinatura oficial da Fran: símbolo floral terracota,
 * nome editorial e espaçamento calmo, como no Manual de Marca.
 */
export const BRAND_SYMBOL = "/manus-storage/fran-mendes-geffer-manual-symbol_f5cf3c42.png";

export function BrandLockup() {
  return (
    <span className="brand-lockup" aria-hidden="true">
      <img className="brand-symbol-image" src={BRAND_SYMBOL} alt="" />
      <span className="brand-lockup-copy">
        <strong>Fran</strong>
        <small>MENDES GEFFER</small>
      </span>
    </span>
  );
}
