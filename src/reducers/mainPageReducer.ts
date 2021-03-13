import { Event } from 'react-big-calendar';
import { DEFAULT_EVENT, NOTIFICATIONS_MODAL } from '../constants/mainPageConstants';
import { isMobile } from '../utils/utils';

export interface MainPageInitialStateInterface {
  events: Event[];
  showAddEventModal: boolean;
  activeSlot: { start: Date | null; end: Date | null };
  logInState: boolean;
  fullDaysInStore: [];
  modalInputsText: {
    name: string;
    title: string;
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
  activeSlot: { start: null, end: null },
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
