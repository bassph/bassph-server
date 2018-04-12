import validator from 'validator'

/*
 * Melby Baldove
 * melqbaldove@gmail.com
 */
export function clean(str) {
    if (str === null || typeof str === 'undefined') {
        return null;
    }
    const low_stripped = validator.stripLow(str + '') // coerce intro string
    return validator.escape(low_stripped)
}

export function cleanObject(obj) {
    for (let prop in obj) {
        if (obj[prop] !== null && typeof obj[prop] === 'object') {
            cleanObject(obj[prop])
        }
        else {
            obj[prop] = clean(obj[prop])
        }
    }
    return obj
}