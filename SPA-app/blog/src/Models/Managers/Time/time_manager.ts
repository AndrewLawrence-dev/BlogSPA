export class TimeManager {
   public static GetDefaultTimezone() {
    return 'EST';
  }

  public static GetCurrentDate() {
    const now   = new Date();
    const month = (now.getMonth() + 1);
    const day   = now.getDate();
    const year  = now.getFullYear();

    return (month + '/' + day + '/' + year);
  }
}
