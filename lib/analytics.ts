// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-LVPSHQM46D';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string, location?: string) => {
  event({
    action: 'phone_click',
    category: 'contact',
    label: `${phoneNumber}${location ? ` - ${location}` : ''}`,
  });
};

// Track email clicks
export const trackEmailClick = (email: string, location?: string) => {
  event({
    action: 'email_click',
    category: 'contact',
    label: `${email}${location ? ` - ${location}` : ''}`,
  });
};

// Track service interest
export const trackServiceInterest = (serviceName: string, action: string = 'view') => {
  event({
    action: action,
    category: 'service_interest',
    label: serviceName,
  });
};

// Track plan selection
export const trackPlanSelection = (planName: string, action: string = 'view') => {
  event({
    action: action,
    category: 'plan_selection',
    label: planName,
  });
};
