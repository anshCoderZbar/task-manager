import React from "react";
import NotificationsSystem, {
  GrowTransition,
  atalhoTheme,
  setUpNotifications,
  useNotifications,
} from "reapop";

export const Notification = () => {
  const { notifications, dismissNotification } = useNotifications();

  setUpNotifications({
    defaultProps: {
      position: "top-right",
      dismissible: true,
      showDismissButton: true,
      dismissAfter: 4000,
    },
  });

  return (
    <NotificationsSystem
      notifications={notifications}
      Transition={GrowTransition}
      dismissNotification={(id) => dismissNotification(id)}
      theme={atalhoTheme}
      dismissible={true}
    />
  );
};
