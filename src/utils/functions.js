export const createCubs = (cubsNumber) => {
    let cubs = []
    for (let i = 0; i < cubsNumber; i++) {
        let col = []
        for (let j = 0; j < cubsNumber; j++) {
            col.push({id: `row ${j+1} col ${i+1}`})
        }
        cubs.push(col)
    }
    return cubs;
}
