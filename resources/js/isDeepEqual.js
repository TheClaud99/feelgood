// Simple deep equal function for objects
export function isDeepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (typeof a !== "object" || a === null || b === null) return false;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (const key of aKeys) {
        if (!bKeys.includes(key) || !isDeepEqual(a[key], b[key])) return false;
    }
    return true;
}
