import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/calculate')
      .send({
        city: 'Gothenburg',
        vehicle: 'Car',
        times: [
          '2013-01-14 21:00:00',
          '2013-01-15 21:00:00',
          '2013-02-07 06:23:27',
          '2013-02-07 15:27:00',
        ],
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ tax: 21 });
  });
});
