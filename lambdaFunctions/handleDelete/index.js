const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  let id = event.pathParameters.id;
  try {
    const person = await People.delete(id);
    if (person) {
      return {
        statusCode: 204,
        body: {},
      };
    } else {
      return {
        statusCode: 404,
        body: `Record Not Found for ID: ${id}`,
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
