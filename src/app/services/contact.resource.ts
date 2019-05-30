import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

export class Contact {
  private apiRoot: string = 'http://localhost:3000/contacts';

  constructor(
    @Inject(HttpClient) private http: HttpClient,
  ) { }

  public query(params: { [key: string]: string }): Promise<Array<any>> {
    return this.http.get<Array<any>>(this.apiRoot, { params }).toPromise();
  }

  public get(id, params?: { [key: string]: string }) {
    return this.http.get(this.apiRoot + '/' + id, { params }).toPromise();
  }

  public save(data: any) {
    return this.http.post(this.apiRoot, data).toPromise();
  }

  public update(data: any) {
    return this.http.put(this.apiRoot + '/' + data.id, data).toPromise();
  }

  public remove(data: any) {
    return this.http.delete(this.apiRoot + '/' + data.id).toPromise();
  }
}
