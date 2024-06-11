export class DataService {
  getDetails() {
    let resultPromise = new Promise((resole, reject) => {
      setTimeout(() => {
        resole('Data');
      }, 2000);
    });
    return resultPromise;
  }
}
