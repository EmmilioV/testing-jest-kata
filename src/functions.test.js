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
    //Assert
    expect(result.start).toEqual(hoy);
});

test('Validation date', () => {
    //Arrange
    const weekday = "mon";
    const week=1;
    const openHour=8;
    const closeHour=14;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
    //Act
    const result = createEvent(weekday,week,openHour,closeHour);
    //Assert
    expect(result.date).toEqual(new Date(hoy).toLocaleDateString('es-ES', options));
});


test('Validation illegal arguments', () => {
    //Arrange
    const weekday = "uts";
    const week=-1;
    const openHour=14;
    const closeHour=8;
    //Act
    const error = () => {
        createEvent(weekday, week, openHour, closeHour);
    }
    //Assert
    expect(error).toThrow(Error);
});


test('create an event list of at least 10 events', () => {
    //Arrange
    const events = [
        {
            weekday:"mon",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"tue",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"wed",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"thu",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"fri",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"sat",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"sun",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"mon",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"fri",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"wed",
            week:1,
            openHour:10,
            closeHour:12
        },
        {
            weekday:"mon",
            week:1,
            openHour:10,
            closeHour:12
        }
    ];
    //Act
    var results = [];
    events.forEach(evento => {
        const result = createEvent(
            evento.weekday,
            evento.week,
            evento.openHour,
            evento.closeHour);
        results.push(result);
    });
    //Assert
    results.forEach(result => {
            expect(result.title).toBe("[SOFKA U] Meeting Room");
            expect(result.description).toBe("Mentoring and Practice");
            expect(result.duration).toEqual([2, "hour"])
        }
    );
});