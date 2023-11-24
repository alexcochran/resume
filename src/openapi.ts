import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '0.2.0',
    title: 'jsonresume-alexcochran',
    description: "alexcochran's JSON Resume as a service.",
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'dev',
    },
    // { ... }
  ],
  tags: [
    // by default: empty Array
    {
      name: '', // Tag name
      description: '', // Tag description
    },
    // { ... }
  ],
  components: {}, // by default: empty object
};

const outputFile = './public/openapi-spec.json';
const routes = ['./app.ts'];

swaggerAutogen({ openapi: '3.1.0' })(outputFile, routes, doc);
