const assert = require("assert");

// flattenLinear recursion function has linear O(N) complexity for flattening an array
function flattenLinear(items) {
    const flat = []

    function inner(input) {
        if (Array.isArray(input)) {
            input.forEach(inner)
        } else {
            flat.push(input)
        }
    }

    // init call
    inner(items)

    return flat
}

assert.deepEqual(flattenLinear([1,[2,[3]],4]), [1,2,3,4])