import React, { createContext, useReducer, useContext } from "react";

export const SET_REMAINING = "SET_REMAINING";
export const ADD_CONSUMED = "ADD_CONSUMED";
export const ADD_BURNED = "ADD_BURNED";
export const ADD_FOOD = "ADD_FOOD";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const ADD_MACROS = "ADD_MACROS";

const CaloriesContext = createContext();

const initialState = {
  remainingCalories: 2000,
  consumedCalories: 0,
  burnedCalories: 0,
  desayuno: [],
  mMañana: [],
  almuerzo: [],
  snack: [],
  cena: [],
  carbs: 0,
  prote: 0,
  fat: 0,
};

export const addFood = (calories) => {
  return {
    type: ADD_FOOD,
    payload: calories,
  };
};

export const addToList = (food) => {
  return {
    type: ADD_TO_LIST,
    payload: food,
  };
};

export const addMacros = (macros) => {
  return {
    type: ADD_MACROS,
    payload: macros,
  };
};

function caloriesReducer(state, action) {
  switch (action.type) {
    case SET_REMAINING:
      return { ...state, remainingCalories: action.payload };
    case ADD_CONSUMED:
      return {
        ...state,
        consumedCalories: state.consumedCalories + action.payload,
      };
    case ADD_BURNED:
      return {
        ...state,
        burnedCalories: state.burnedCalories + action.payload,
      };
    case ADD_FOOD:
      return {
        ...state,
        remainingCalories: state.remainingCalories - action.payload,
        consumedCalories: state.consumedCalories + action.payload,
      };
    case ADD_TO_LIST:
      const oldArray = state[action.payload.comida];
      const newState = {
        ...state,
        [action.payload.comida]: [...oldArray, action.payload],
      };
      return newState;

    case ADD_MACROS:
      return {
        ...state,
        carbs: state.carbs + action.payload.carbs,
        prote: state.prote + action.payload.prote,
        fat: state.fat + action.payload.fat,
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function CaloriesProvider({ children }) {
  const [state, dispatch] = useReducer(caloriesReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <CaloriesContext.Provider value={value}>
      {children}
    </CaloriesContext.Provider>
  );
}

function useCalories() {
  const context = useContext(CaloriesContext);
  if (!context) {
    throw new Error("useCalories must be used within a CaloriesProvider");
  }
  return context;
}

export { CaloriesProvider, useCalories };
