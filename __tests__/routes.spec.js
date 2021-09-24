const request = require('supertest');
const app = require('../server');

describe('api routes', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log("testing")
        })
    })

    afterAll((done) => {
        console.log("api end")
        api.close(done)
    })

    test('GET /cars returns array of cars', (done) => {
        request(api)
            .get('/cars')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200,done)
    })
    test('GET /cars/:hid returns data about a specific cars', (done) => {
        request(api)
            .get('/cars/1')
            .set('Accept', 'application/json')
            .expect({ id:1, name: "mercedes", type: "amg"})
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    test('POST /cars', (done) => {
        request(api)
            .post('/cars')
            .send({name: "bmw", type: "random"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({ message: `done adding`})
            .expect(201, done)
    })
    test('GET /trash', (done) => {
        request(api)
            .get('/random')
            .expect(404, done)
    })
})