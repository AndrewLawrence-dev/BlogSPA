export class Author {
  public id           : string;
  public first_name   : string;
  public last_name    : string;
  public display_name : string;

  constructor(id: string, first_name: string, last_name: string, display_name?: string) {
    this.id           = id;
    this.first_name   = first_name;
    this.last_name    = last_name;
    this.display_name = ((!display_name) ? this.first_name + ' ' + this.last_name : display_name);
  }
}
