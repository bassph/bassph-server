export const projectSingle = (entity) => {
    return {
        towerAddress: entity._id,
        operator: entity.operator,
        bandwidth: entity.bandwidth,
        dateAdded: new Date(entity.dateAdded).toLocaleString()
    }
}

export const project = (entities) => {
    return entities.map(projectSingle)
}