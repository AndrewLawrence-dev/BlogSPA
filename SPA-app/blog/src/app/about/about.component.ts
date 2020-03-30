import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title             : string = 'About';
  public software_used     : {}[]   = [];
  public img_base_path     : string = '/assets/images/';
  public originally_posted : string = '03/29/2020';
  public last_updated      : string = '03/30/2020';

  constructor() {
    this.loadTechnologies();
  }

  ngOnInit() {
  }

  private loadTechnologies() {
    this.createTech('Angular', '8.2.14', 'Front -End', 'angular-icon.svg');
    this.createTech('ASP.NET Core Web API', '3.1', 'Back-End', 'aspnetcore-logo.png');
    this.createTech('Entity Framework Core', '3.1.3', 'Data Access Interface', 'entity_framework_logo.png');
    this.createTech('Microsoft SQL Server', '17.9.1', 'Database Server', 'Sql_server_logo.png');
    this.createTech('Bootstrap', '4.4.1', 'CSS', 'bootstrap-logo.png');
    this.createTech('Visual Studio Community', '2019', 'IDE (Integrated Development Environment)', 'VisualStudio2019_logo.svg');
    this.createTech('Angular CLI', '8.3.25', 'Command-line development tool for Angular', 'angular_cli_logo.png');
  }

  private createTech(name: string, version: string, used_for: string, img_file: string) {
    this.software_used.push({
      'name'     : name,
      'version'  : version,
      'used_for' : used_for,
      'img_file' : img_file
    });
  }
}
