const initState = { loading: false };
type InitialStateType = typeof initState;
type ActionType = loadingACType;
type loadingACType = ReturnType<typeof loadingAC>;
export const loadingReducer = (
  state: InitialStateType = initState,
  action: ActionType
): InitialStateType => {
  // fix any
  switch (action.type) {
    case "LOADING": {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};

export const loadingAC = (loading: boolean) => {
  return { type: "LOADING", payload: { loading } } as const;
}; // fix any
