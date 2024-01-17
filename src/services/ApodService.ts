class ApodService {
  private url = "https://api.nasa.gov/planetary/apod";
  private key = "NI4MNHPzJh1rbeHgRnu7yXbn8xNomR59Fi7WXobo";

  public getImageByDate = async (date : Date) : Promise<any> => {
    const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    
    const res = await fetch(`${this.url}?api_key=${this.key}&date=${formatedDate}`);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } 

  public getImageByRange = async (startDate : Date, endDate : Date) : Promise<any> => {
    const formatedStartDate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
    const formatedEndDate = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;

    const res = await fetch(`${this.url}?api_key=${this.key}&start_date=${formatedStartDate}&end_date=${formatedEndDate}`);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  }

  public getToDayImage = async () : Promise<any> => {
    const res = await fetch(`${this.url}?api_key=${this.key}`);

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } 
}


export default ApodService;