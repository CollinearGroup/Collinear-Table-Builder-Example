import { buildTableWithHiding } from '../table-builders'

let setHidden
let onHiddenUpdate
const configuration = {
  stateHandler: (setState, onUpdate) => {
    setHidden = setState
    onHiddenUpdate = onUpdate
  },
}

// onHiddenUpdate((value) => console.log(value))
// setHidden(['city'])

export const TableWithHidingConfiguration = buildTableWithHiding(configuration)
