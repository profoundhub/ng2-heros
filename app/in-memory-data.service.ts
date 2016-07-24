export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Le Tarco'},
      {id: 13, name: 'Bombastico'},
      {id: 14, name: 'Mr. Boom'},
      {id: 15, name: 'Ms. Agenta'},
      {id: 16, name: 'Rubber Heart'},
      {id: 17, name: 'Dynamama'},
      {id: 18, name: 'Professor IQ'},
      {id: 19, name: 'Bronze Brain'},
      {id: 20, name: 'Mad Tornado'}
    ];
    return {heroes};
  }
}
