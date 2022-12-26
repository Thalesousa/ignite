import { ReactNode } from 'react'

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface ICyclesState {
  cycles: ICycle[]
  activeCycleId: string | null
}

export interface ICreateCycleData {
  task: string
  minutesAmount: number
}

export interface ICyclesContextType {
  cycles: ICycle[]
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: ICreateCycleData) => void
  interruptCurrentCycle: () => void
}

export interface ICyclesContextProviderProps {
  children: ReactNode
}
