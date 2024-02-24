import {Dispatch, SetStateAction} from "react";

type IState<T> = Dispatch<SetStateAction<T>>

export type {IState}