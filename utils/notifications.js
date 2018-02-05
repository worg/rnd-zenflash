import { Permissions, Notifications } from 'expo';
import { NOTIFICATIONS_STORAGE_KEY } from './constants';
import { storage } from './api';



const createNotification = () => ({
  title: 'Hard work is the key to success',
  body: "You haven't practiced today, get smarter 💡 with zenflash",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  }
});

export const setLocalNotification = () => {
  storage.get(NOTIFICATIONS_STORAGE_KEY)
    .then(data => {
      // notification not needed
      if (data !== null) {
        return;
      }

      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          // we don't have permissions :(
          if (status !== 'granted') {
            return;
          }

          Notifications.cancelAllScheduledNotificationsAsync();
          const tomorrow = new Date();
          // notify tomorrow at 16:00 -> 4pm
          tomorrow.setDate(tomorrow.getDate()  + 1);
          tomorrow.setHours(16);
          tomorrow.setMintutes(0);

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day',
            }
          );
          storage.set(NOTIFICATIONS_STORAGE_KEY, true);
        });
    });
};

export const clearLocalNotification = () => {
  return storage.remove(NOTIFICATIONS_STORAGE_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
};
