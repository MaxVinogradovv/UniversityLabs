import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestInterceptor implements HttpInterceptor {
  /**
   * Inject storage
   */
  public constructor() {}
  /**
   * Url base for all requests made via http to api
   */
  private urlBase: string = 'http://localhost:8080';
  /**
   * Set needed headers for api
   */
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request.url.includes(".svg") &&
      !request.url.includes("icons") &&
      !request.url.includes("assets")
    ) {
      const url = this.urlBase + request.url;
      request = request.clone({
        url
      });
    }
    return next.handle(request);
  }
}
