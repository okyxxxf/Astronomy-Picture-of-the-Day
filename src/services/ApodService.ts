class ApodService {
  private url = "https://api.nasa.gov/planetary/apod";
  private key = "NI4MNHPzJh1rbeHgRnu7yXbn8xNomR59Fi7WXobo";

  public getImageByDate = async (date : Date) : Promise<any> => {
    const formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const res = await fetch(`${this.url}?api_key=${this.key}&date=${formatedDate}`)

    if (!res.ok) throw new Error(res.statusText);

    return await res.json();
  } 

}


export default ApodService;