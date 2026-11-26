// Layer 3 (server-side Velo only, 26 Nov 2026): city name safety rule, "Aurangabad" -> "Chhatrapati Sambhajinagar (Aurangabad)".
// Applied to visible text segments only (never URLs, hrefs, ids), after layers 1 and 2. Order matters (a, b, c, d, e).
// No lookbehind: older browsers fail the whole module on it, so the bare-name rules capture one preceding character instead.
// A bare "Aurangabad" preceded by "(" is treated as already wrapped, which is how "Sambhajinagar (Aurangabad)" is never double wrapped.
var T=[
// a. missing space before the bracket
[/Sambhajinagar\(Aurangabad\)/,"Sambhajinagar (Aurangabad)"],
[/SAMBHAJINAGAR\(AURANGABAD\)/,"SAMBHAJINAGAR (AURANGABAD)"],
// b. missing space after the bracket ("(Aurangabad)Plant")
[/\(Aurangabad\)([A-Za-z])/,"(Aurangabad) $1"],
[/\(AURANGABAD\)([A-Z])/,"(AURANGABAD) $1"],
// c. street address forms
[/MIDC Waluj,?\s*\(Aurangabad\)/,"MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad)"],
[/MIDC Waluj,\s*Aurangabad(?![\w-])/,"MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad)"],
[/(^|[^(\w\/@.-])Aurangabad\s\(MIDC Waluj\)/,"$1Chhatrapati Sambhajinagar (Aurangabad), MIDC Waluj"],
// d. any other bare name
[/(^|[^(\w\/@.-])Aurangabad(?![\w-])/,"$1Chhatrapati Sambhajinagar (Aurangabad)"],
// e. uppercase equivalent
[/(^|[^(\w\/@.-])AURANGABAD(?![\w-])/,"$1CHHATRAPATI SAMBHAJINAGAR (AURANGABAD)"]],H=[],A=[];
var SK={};
