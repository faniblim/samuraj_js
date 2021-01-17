export const updateObjectInArray = (items, itemId, obhPropName, newObjProps) => {
    return items.map(u => {
        if (u[obhPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}