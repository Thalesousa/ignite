import { CycleReducerActionTypes } from '../../@enums/CycleReducerActionTypes'
import { ICycle } from '../../@interfaces/Cycle'

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: CycleReducerActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: CycleReducerActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction(activeCycleId: string | null) {
  return {
    type: CycleReducerActionTypes.INTERRUPT_CURRENT_CYCLE,
    payload: {
      activeCycleId,
    },
  }
}
