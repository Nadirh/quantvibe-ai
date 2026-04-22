type GtmDataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: GtmDataLayerEvent[];
  }
}

export function gtmEvent(event: GtmDataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}
