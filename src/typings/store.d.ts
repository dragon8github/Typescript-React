declare interface IDraftState {
    isChecked: boolean,
    content: string
}

declare interface IStoreState {
    route: {
        localtion: Location
    }
    draft: IDraftState
}