const dynamoose = require('dynamoose');

const People = dynamoose.model('people-table', {
  id: String,
  name: String,
  age: Number,
  phone: String,
});

exports.handler = async (event) => {
  const personData = JSON.parse(event.body);
  console.log(personData);
  const newPerson = new People({
    id: personData.id,
    name: personData.name,
    age: personData.age,
    phone: personData.phone,
  });

  try {
    await newPerson.save();
    return {
      statusCode: 201,
      body: JSON.stringify(newPerson),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
