const PX = 'px';
export default {
    SIDES: {
        TOP: 'Top',
        RIGHT: 'Right',
        BOTTOM: 'Bottom',
        LEFT: 'Left',
    },
    mapPosition(position) {
        const {top, bottom, left, right} = position;
        const location = {top, bottom, left, right};
        const foundKeys = Object.keys(location).filter(foundKey => !!position[foundKey] || position[foundKey] === 0);
        return foundKeys.length && Object.assign(...foundKeys.map(key => ({[key]: location[key] + PX})));
    },
    reduceStyle(values, property = '') {
        const sides = Object.keys(this.SIDES)
            .map(side => property !== '' ? this.SIDES[side] : side.toLowerCase());
        const styleReducer = (styleObject, styleSide, sideIndex) => {
            if(sideIndex < values.length && values[sideIndex] !== 0)
                Object.assign(styleObject, {[property + styleSide]: values[sideIndex] + PX});
            return styleObject;
        };
        if (Array.isArray(values) && values.length > 0)
            return sides.reduce(styleReducer, {});
        return null;
    },
    reduceProp(prop, propertyKey) {
        const style = {};
        if(typeof prop === "number")
            Object.assign(style, {[propertyKey]: prop + PX});
        else if(Array.isArray(prop) && prop.length > 0){
            if(prop.every(paddingValue => typeof paddingValue === "object"))
                Object.assign(style, ...prop.map(propValue => {
                    const key = Object.keys(propValue)[0];
                    const suffix = this.SIDES[key.toUpperCase()];
                    const paddingProperty = propertyKey + suffix;
                    return ({[paddingProperty]: propValue[key] + PX})
                }));
            else Object.assign(style, this.reduceStyle(prop, propertyKey));
        } else if(typeof prop === "object") {
            Object.assign(style, ...Object.keys(prop).map(key => {
                const suffix = this.SIDES[key.toUpperCase()];
                const paddingProperty = propertyKey + suffix;
                return ({[paddingProperty]: prop[key] + PX});
            }));
        }
        return Object.keys(style).length ? style : null;
    },
    reducePadding(padding) {
        return this.reduceProp(padding, "padding");
    }
};
