import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: '0.2.0',
    title: 'jsonresume-alexcochran',
    description: "alexcochran's JSON Resume as a service.",
  },
  servers: [
    {
      url: 'http://localhost:5280/api/v1',
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
  components: {
    schemas: {
      basicsSchema: {
        $name: 'John Doe',
        $label: 'Programmer',
        image: 'https://picsum.photos/200/300',
        email: 'john@gmail.com',
        phone: '(912) 555-4321',
        url: 'https://example.com',
        summary: 'A summary of John Doe...',
        location: {
          address: '2712 Broadway St',
          postalCode: 'CA 94115',
          city: 'San Francisco',
          countryCode: 'US',
          region: 'California',
        },
      },
    },
  },
};

const outputFile = './public/openapi-spec.json';
const routes = ['./src/api/v1/index.ts'];

swaggerAutogen({ openapi: '3.1.0' })(outputFile, routes, doc);
