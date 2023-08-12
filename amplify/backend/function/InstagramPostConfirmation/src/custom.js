/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log('Heyy, lambda function is running!');
  console.log(event);
  return event;
};
