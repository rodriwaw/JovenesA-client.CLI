import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UrlService {
  webApiPrefix: string;
  clientUrl: string;

  constructor() {
    console.log('urlService constructor has ' + window.location.hostname);
    const hostName = window.location.hostname.toLocaleLowerCase();

    if (hostName === 'privada.jovenesadelante.org') {
      this.webApiPrefix = 'https://JAWebAPI.jovenesadelante.org/api/';
      this.clientUrl = 'https://privada.jovenesadelante.org';
    } else if (hostName === 'privada-dev.jovenesadelante.org') {
      this.webApiPrefix = 'https://JAWebAPI-dev.jovenesadelante.org/api/';
      this.clientUrl = 'https://privada-dev.jovenesadelante.org';
    } else if (hostName === 'localhost') {
      //
      // check ipconfig to verify IPv4 address for current router gateway (usually Wi-Fi)
      //
      // this.webApiPrefix = 'http://192.168.1.100:1100/api/'; // Local Production
      this.webApiPrefix = 'http://192.168.0.16:1099/api/'; // megacable Local  Development
      // this.webApiPrefix = 'https://JAWebAPI-dev.jovenesadelante.org/api/';
      // all local for Carlos' machine
      // this.webApiPrefix = 'http://localhost:1099/api/';
      // this.webApiPrefix = 'https://JAWebAPI.jovenesadelante.org/api/';  // Production
      // all local for Carlos' machine
      // this.webApiPrefix = 'http://localhost:1099/api/';
      this.clientUrl = 'http://localhost:3000';
    }

    console.log('>>>webapi prefix: ' + this.webApiPrefix);
    console.log('>>>clientUrl: ' + this.clientUrl);
  }
  public getWebApiPrefix(): string {
    return this.webApiPrefix;
  }

  public getClientUrl(): string {
    return this.clientUrl;
  }

  public getClientCallbackUrl(): string {
    return this.clientUrl + '/callback';
  }
}
