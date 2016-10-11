export const MARK_ALL_MESSAGES_AS_READ = 'MARK_ALL_MESSAGES_AS_READ';
export const MARK_ALL_NOTIFICATIONS_AS_READ = 'MARK_ALL_NOTIFICATIONS_AS_READ';
export const TOGGLE_FLYOUT = 'TOGGLE_FLYOUT';


export const markAllMessagesAsRead = () => ({
  type: MARK_ALL_MESSAGES_AS_READ,
});

export const markAllNotificationsAsRead = () => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ,
});

export const toggleFlyout = flyout => ({
  type: TOGGLE_FLYOUT,
  flyout,
});
