declare global {
  interface Window {
    configs: {
      apiUrl: string;
    };
  }
}

export const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "https://0def71b9-85bb-4456-be27-e5a8b41a3445-dev.e1-us-east-azure.choreoapis.dev/luxury-hotels/hotel-reservation-service/v1.0";
