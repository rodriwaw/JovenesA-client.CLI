import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UrlService {
  webApiPrefix: string;
  clientUrl: string;

  constructor() {

    console.log('urlService constructor has' + window.location.hostname);
    const hostName = window.location.hostname.toLocaleLowerCase();

    if (hostName === 'privada.jovenesadelante.org') {
      this.webApiPrefix = 'https://JAWebAPI.jovenesadelante.org/api/';
      this.clientUrl = 'https://privada.jovenesadelante.org';
    } else if (hostName === 'privada-dev.jovenesadelante.org') {
      this.webApiPrefix = 'https://JAWebAPI-dev.jovenesadelante.org/api/';
      this.clientUrl = 'https://privada-dev.jovenesadelante.org';
    } else if (hostName === 'localhost') {
      this.webApiPrefix = 'http://192.168.1.69:2369/api/'; // Local Development
      // this.webApiPrefix = 'http://192.168.43.185:2369/api/'; // Local Development MOTO G
      this.webApiPrefix = 'http://192.168.1.69:2368/api/'; // Local Production
      // this.webApiPrefix = 'https://JAWebAPI-dev.jovenesadelante.org/api/';
      // this.webApiPrefix = 'https://JAWebAPI.jovenesadelante.org/api/';  // Production
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
