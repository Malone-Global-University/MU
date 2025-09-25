// make-greece-svg.js
const fetch = require('node-fetch');
const d3 = require('d3-geo');
const fs = require('fs');

(async () => {
  try {
    // Data source (Natural Earth / geo-countries)
    const GEOJSON_URL = 'https://datahub.io/core/geo-countries/r/countries.geojson';

    console.log('Fetching countries GeoJSON from', GEOJSON_URL);
    const res = await fetch(GEOJSON_URL);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    const geo = await res.json();

    // Find the Greece feature robustly
    const features = (geo.type === 'FeatureCollection') ? geo.features : [geo];
    const greece = features.find(f => {
      const p = f.properties || {};
      const vals = [p.ADMIN, p.NAME, p.name, p.NAME_LONG, p.ISO_A3, p.iso_a3, p.SOVEREIGNT];
      for (const v of vals) if (v && String(v).toLowerCase().includes('greece')) return true;
      return false;
    });
    if (!greece) throw new Error('Could not find Greece in GeoJSON. Check the source.');

    // SVG output size and projection tweakables
    const width = 1600;
    const height = 1000;
    // Center on Greece [lon,lat] and choose a scale that captures islands
    const projection = d3.geoMercator()
      .center([22.0, 39.0])
      .scale(3600)   // tweak if you want more or less zoom
      .translate([width / 2, height / 2]);

    const pathGen = d3.geoPath().projection(projection);

    const pathD = pathGen(greece);

    // Build svg
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
  <title>Greece coastline (derived from GeoJSON)</title>
  <desc>High-precision coastline generated from countries GeoJSON (Natural Earth derivative).</desc>
  <rect width="100%" height="100%" fill="#e7f3fb"/>
  <g id="coastline">
    <path d="${pathD}" fill="#efe7d6" stroke="#8a6e46" stroke-width="1.5" />
  </g>
</svg>`;

    fs.writeFileSync('greece-coastline.svg', svg, 'utf8');
    console.log('Wrote greece-coastline.svg — open in browser or embed in your site.');
  } catch (err) {
    console.error('Error:', err.message || err);
  }
})();
