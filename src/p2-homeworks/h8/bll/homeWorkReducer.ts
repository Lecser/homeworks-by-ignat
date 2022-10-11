import { UserType } from "../HW8";

type ActionType = checkAgeACType | sortACType;
export const homeWorkReducer = (
  state: UserType,
  action: ActionType
): UserType => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      let sorted = [...state].sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      return action.payload.value === "up" ? sorted : sorted.reverse();
    }
    case "check": {
      // need to fix
      return state.filter((el) => el.age > action.payload.age);
    }
    default:
      return state;
  }
};
type sortACType = ReturnType<typeof sortAC>;
type checkAgeACType = ReturnType<typeof checkAgeAC>;
export const sortAC = (value: string) => {
  return {
    type: "sort",
    payload: {
      value,
    },
  } as const;
};

export const checkAgeAC = (age: number) => {
  return {
    type: "check",
    payload: {
      age,
    },
  } as const;
};
