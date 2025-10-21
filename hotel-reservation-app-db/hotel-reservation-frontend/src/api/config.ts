declare global {
  interface Window {
    configs: {
      apiUrl: string;
    };
  }
}

export const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "http://hotel-reservation-service-3730685075:4000/api/reservations";
