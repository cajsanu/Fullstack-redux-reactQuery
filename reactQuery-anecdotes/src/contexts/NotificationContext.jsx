import { createContext, useReducer, useEffect } from "react";

const NotificationReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return `Created new anecdote: ${action.payload}`;
    case "VOTE":
      return `Voted for ${action.payload}`;
    case "ERROR":
      return "Error, too short anecdote";
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    NotificationReducer,
    null
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationDispatch({ type: "CLEAR" });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [notification]);

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
