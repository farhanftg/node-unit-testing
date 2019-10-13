var assert = require('chai');
var request = require('supertest');
var app = require('../../app');

describe('User API', () => {
    const user = {
        username: 'test',
        password: 'testpass',
        subject: 'Math',
        class : '3',
        status:1
    };
    describe('OK, /user-list' , () => {
        it('GET /user-list' , (done) => {
            request(app).get('/api/user-list')
                .then((res) => {
                    let body = res.body;
                    assert.expect(Array.isArray(body)).to.eq(true);
                    
                    done();
                })
                .catch(err => {
                    done(err);
                })
        })
    })

    describe('OK, /add' , () => {
        it('POST /add' , (done) => {
            request(app)
                .post('/api/add')
                .set('Content-Type','application/json')
                .send(user)
                .expect(200 , done);
        })
    });
    describe('OK, /login' , () => {
        it('POST /login' , (done) => {
            request(app)
                .post('/api/login')
                .set('Content-Type','application/json')
                .send({username:user.username,password:user.password})
                .expect(200,done)
        });
    })
});