// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "291o9bsa1facivu9vo12hu6l5r",     // CognitoClientID
  "api_base_url": "https://ib4o637gq3.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d74f3hcsu6jpd.amplifyapp.com"                                      // AmplifyURL
};

export default config;
