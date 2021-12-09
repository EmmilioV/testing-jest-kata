import { createEvent } from './functions'
beforeAll(() => {global.Date.now = jest.fn(() => new Date('2021-12-07T00:00:00Z').getTime())});

test('Validation a event title and content basic', () => {
    //Arrange
    const weekday = "mon";
    const week=1;
    const openHour=8;
    const closeHour=14;
    //Act
    const result = createEvent(weekday,week,openHour,closeHour);
    //Assert
    expect(result.title).toBe("[SOFKA U] Meeting Room");
    expect(result.description).toBe("Mentoring and Practice");
    expect(result.duration).toEqual([6, "hour"]);

});

test('Validation start date', () => {
    //Arrange
    const weekday = "mon";
    const week=1;
    const openHour=8;
    const closeHour=14;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    //Act
    const result = createEvent(weekday,week,openHour,closeHour);
    //arrange
    expect(result.start).toEqual(hoy);
});

test('Validation date', () => {
    const weekday = "mon";
    const week=1;
    const openHour=8;
    const closeHour=14;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
    //Act
    const result = createEvent(weekday,week,openHour,closeHour);
    //arrange
    expect(result.date).toEqual(new Date(hoy).toLocaleDateString('es-ES', options));
});


test('Validation illegal arguments', () => {
    //TODO: hacer las verificaciones
});


test('create an event list of at least 10 events', () => {
    //TODO: hacer las verificaciones
});