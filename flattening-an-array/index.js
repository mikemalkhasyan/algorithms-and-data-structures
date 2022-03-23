const assert = require("assert");

// flattenLinear recursion function has linear O(N) complexity for flattening an array
function flattenLinear(items, flat = []) {
    if (Array.isArray(items)) {
        items.forEach((item) => flattenLinear(item, flat))
    } else {
        flat.push(items)
    }

    return flat
}

assert.deepEqual(flattenLinear([1,[2,[3]],4]), [1,2,3,4])