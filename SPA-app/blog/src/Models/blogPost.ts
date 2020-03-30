import { Author }      from './author';
import { Topic }       from './topic';
import { TimeManager } from './Managers/Time/time_manager';

export class BlogPost {
  public id            : string;
  public author        : Author;
  public created       : Date;
  public last_modified : Date;
  public timezone      : string;
  public title         : string;
  public content       : string;
  public topics?       : Topic[];
  public comments?     : Comment[];

  constructor (
    id            : string,
    author        : Author,
    created       : Date,
    last_modified : Date,
    title         : string,
    content       : string,
    timezone?     : string,
    topics?       : Topic[],
    comments?     : Comment[]
  ) {
    this.id            = id;
    this.author        = author;
    this.created       = created;
    this.last_modified = last_modified;
    this.title         = title;
    this.content       = content;
    this.timezone      = ((!timezone) ? TimeManager.GetDefaultTimezone() : timezone);
    this.topics        = topics;
    this.comments      = comments;
  }

  public hasBeenModified(): boolean {
    return (!!this.last_modified);
  }

  public hasTopics(): boolean {
    return (!!this.topics);
  }
}
