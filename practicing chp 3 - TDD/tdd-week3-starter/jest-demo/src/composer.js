
function composer(a, b) {
  // Keep it simple for illustration: uppercase non-empty values
  return [a, b].filter(Boolean).map(x => String(x).toUpperCase());
}

module.exports = { composer };
