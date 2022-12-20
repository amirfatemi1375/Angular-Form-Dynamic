import { Subscription } from 'rxjs';
export const unSubscriber = (subscription: Subscription[]) => {
  subscription.map((subs) => {
    subs.unsubscribe();
  });
};
