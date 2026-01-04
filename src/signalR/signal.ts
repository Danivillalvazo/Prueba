import * as signalR from "@microsoft/signalr";

const HUB_URL = "http://localhost:5000/hubs/notifications";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl(HUB_URL)
  .withAutomaticReconnect()
  .build();
