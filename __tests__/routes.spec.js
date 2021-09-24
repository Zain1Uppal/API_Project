const request = require('supertest');
const app = require('../server');

describe('api routes', () => {
    test('GET / returns a message', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})