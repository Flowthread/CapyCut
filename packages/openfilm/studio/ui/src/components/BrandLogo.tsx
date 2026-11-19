/*
 * The mark: a C drawn as a film reel — the aperture is its opening, and the sprocket holes are punched through the
 * stroke (one even-odd path, so they stay clear at any size) — in the surrounding text's colour.
 */
const VIEWBOX = '30 -748 688 768';
const REEL = 'M724.1 -154.9A374 374 0 1 1 724.1 -573.1L578.1 -474.7M578.1 -474.7A198 198 0 1 0 578.1 -253.3L724.1 -154.9ZM535.6 -121.5a30 30 0 1 0 60 0a30 30 0 1 0-60 0ZM301.3 -90.2a30 30 0 1 0 60 0a30 30 0 1 0-60 0ZM123.5 -245.9a30 30 0 1 0 60 0a30 30 0 1 0-60 0ZM123.5 -482.1a30 30 0 1 0 60 0a30 30 0 1 0-60 0ZM301.3 -637.8a30 30 0 1 0 60 0a30 30 0 1 0-60 0ZM535.6 -606.5a30 30 0 1 0 60 0a30 30 0 1 0-60 0Z';

export function BrandLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox={VIEWBOX} fill="currentColor" className="block shrink-0" role="img" aria-label="CapyCut">
      <path fillRule="evenodd" d={REEL} />
    </svg>
  );
}
