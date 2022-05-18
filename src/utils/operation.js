
export class Operation {
    static multiplyConditionally (baseMultiple, factor, maxCondition) {
        if (factor <= maxCondition) {
            return baseMultiple
        } else {
            return baseMultiple +((factor - maxCondition) * baseMultiple)
        }
    }
}