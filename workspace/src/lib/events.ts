
type TrackConversionParams = {
  eventName: string;
  [key: string]: any;
};

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams: { [key: string]: any }
    ) => void;
  }
}

export const trackConversion = ({ eventName, ...params }: TrackConversionParams): void => {
  const eventParams = { ...params };
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
    console.log(`GA4 Event Fired: ${eventName}`, eventParams);
  } else {
    console.log(`Fallback Event Fired: ${eventName}`, eventParams);
  }
};
