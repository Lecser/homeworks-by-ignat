const initState = {
  theme: "some",
};
type InitialStateType = typeof initState;

type ActionThemeType = changeThemeCType;

export const themeReducer = (
  state: InitialStateType = initState,
  action: ActionThemeType
): InitialStateType => {
  // fix any
  switch (action.type) {
    case "CHANGE_THEME": {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};
type changeThemeCType = ReturnType<typeof changeThemeC>;
export const changeThemeC = (theme: string) => {
  return {
    type: "CHANGE_THEME",
    payload: { theme },
  } as const;
};
