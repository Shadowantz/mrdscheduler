import { Event } from 'react-big-calendar';
import { Moment } from 'moment';
import { DEFAULT_EVENT, NOTIFICATIONS_MODAL } from '../constants/mainPageConstants';
import { isMobile } from '../utils/utils';

export interface MainPageInitialStateInterface {
  events: Event[];
  showAddEventModal: boolean;
  showEventsListModal: boolean;
  activeSlot: { selectedDate: Moment | null; startTime: number | null };
  logInState: boolean;
  fullDaysInStore: [];
  modalInputsText: {
    name: string;
    email: string;
    phone: string;
  };
  notificationsModal: {
    open: boolean;
    header: string;
    content: string;
  };
  isMobile: boolean;
}

export const mainPageInitialState: MainPageInitialStateInterface = {
  events: [],
  showAddEventModal: false,
  showEventsListModal: false,
  activeSlot: { selectedDate: null, startTime: null },
  logInState: false,
  fullDaysInStore: [],
  modalInputsText: DEFAULT_EVENT,
  notificationsModal: NOTIFICATIONS_MODAL,
  isMobile: isMobile(),
};

export default function mainPageReducer(state, action) {
  const { mainPage } = state;

  switch (action.type) {
    case 'setEvents': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          events: action.payload,
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

    case 'setShowEventsListModal': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          showEventsListModal: action.payload,
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
      const { activeSlot } = mainPage;

      return {
        ...state,
        mainPage: {
          ...mainPage,
          activeSlot: {
            ...activeSlot,
            ...action.payload,
          },
        },
      };
    }

    case 'setLogInState': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          logInState: action.payload,
        },
      };
    }

    case 'setModalInputsText': {
      const { modalInputsText } = mainPage;

      return {
        ...state,
        mainPage: {
          ...mainPage,
          modalInputsText: {
            ...modalInputsText,
            ...action.payload,
          },
        },
      };
    }

    case 'resetModalInputsText': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          modalInputsText: mainPageInitialState.modalInputsText,
        },
      };
    }

    case 'setNotificationsModal': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          notificationsModal: action.payload,
        },
      };
    }

    case 'resetNotificationsModal': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          notificationsModal: mainPageInitialState.notificationsModal,
        },
      };
    }

    case 'setFullDaysInStore': {
      return {
        ...state,
        mainPage: {
          ...mainPage,
          fullDaysInStore: action.payload,
        },
      };
    }

    default:
      return state;
  }
}
