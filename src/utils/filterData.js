export class FilterData {
    static oneOfEachKind( arrayToFilter, key ) {
        const values = arrayToFilter.map(each => each[key])
        const result = values.filter(( currentValue, index, arr) => {
            return arr.indexOf(currentValue) === index;
        })
        return result;
    }

    static selectionOnly( arrayToFilter, searchkey, searchValue ) {
        const result = arrayToFilter.filter(( eachObject ) => {
            return eachObject[searchkey] === searchValue
        })
        return result
    }
}