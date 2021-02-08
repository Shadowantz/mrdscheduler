import { Event } from 'react-big-calendar';

export interface MainPageInitialStateInterface {
  events: Event[];
  showAddEventModal: boolean;
  activeSlot: { start: Date | null; end: Date | null };
}

export const mainPageInitialState: MainPageInitialStateInterface = {
  events: [],
  showAddEventModal: false,
  activeSlot: { start: null, end: null },
};

export default function mainPageReducer(state, action) {
  const { mainPage } = state;

  switch (action.type) {
    case 'setEvents': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          events: [...mainPage.events, action.payload],
        },
      };
    }

    case 'setShowAddEventModal': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          showAddEventModal: action.payload,
        },
      };
    }

    case 'resetActiveSlot': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          activeSlot: mainPageInitialState.activeSlot,
        },
      };
    }

    case 'setActiveSlot': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          activeSlot: action.payload,
        },
      };
    }

    default:
      return state;
  }
}
