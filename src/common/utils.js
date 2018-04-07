import validator from 'validator'

/*
 * Melby Baldove
 * melqbaldove@gmail.com
 */
export const clean = (str) => {
    if (str != undefined) {
        const low_stripped = validator.stripLow(str + '') // coerce intro string
        return validator.escape(low_stripped)
    }
}

export const cleanObject = (obj) => {
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