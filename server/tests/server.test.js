var request = require('supertest');
var expect = require('expect');

var {app} = require('./../server');
var {Todo} = require('./../models/todo');


beforeEach((done) => {
  Todo.remove({}).then(() => done());
});
describe('POST /todos', () => {
  it('should add the todo', (done)=> {
    var text = "Test todo text";

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=> {
      expect(res.body.text).toBe(text);
    })
    .end((err,res) => {
      if(err)
      {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

  it('should not add new todo in the list', (done)=>{
    request(app)
    .post('/todos')
    .expect(400)
    .send({})
      .end((err, res) => {
      if(err){
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(0);
        done();
      }).catch((e) => done(e));
    });
});
});
