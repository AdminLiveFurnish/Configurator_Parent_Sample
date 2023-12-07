export default function CircularProgress({
  size = 30,
  color = 'var(--primary-color)',
  borderColor,
  thickness = 4,
}) {
  const s = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className="circularProgress"
      style={{ color, width: s, height: s, borderWidth: thickness, ...(borderColor && {borderColor}) }}></div>
  );
}
