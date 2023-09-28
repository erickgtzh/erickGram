/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const postEventHandler = require('./PostEventHandler');

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    await handleRecord(record);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async record => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  if (record.eventSourceARN.includes('Post')) {
    await postEventHandler(record);
  } else if (record.eventSourceARN.includes('UserFollow')) {
    //
  }
};
