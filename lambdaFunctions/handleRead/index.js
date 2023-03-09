const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  // Get Records from DynamoDB
  try {
    const people = await People.scan().exec();
    return {
      statusCode: 200,
      body: JSON.stringify(people),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
