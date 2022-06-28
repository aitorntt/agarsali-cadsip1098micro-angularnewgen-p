import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: {
    source: string,
    body: any,
    args: any[]
  } = { source: '', body: {}, args: [] };

  constructor() { }

  setData(source: string, body: any, args: any[]) {
    this.data.source = source;
    this.data.body = body;
    this.data.args = args;
  }

  setBody(body: any): void {
    this.data.body = body;
  }

  getBody(): any {
    const body: any = this.data.body;
    this.setBody({});
    return body;
  }

  setSource(source: string): void {
    this.data.source = source;
  }

  getSource(): string {
    const source: string = this.data.source;
    this.setSource('');
    return source;
  }

  setArgs(args: any[]): void {
    this.data.args = args;
  }

  getArgs(): any[] {
    const args: any[] = this.data.args;
    this.setArgs([]);
    return args;
  }

}
