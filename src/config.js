export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "plobod-notes"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9guxq3fhik.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_YPOnSn5Zl",
    APP_CLIENT_ID: "7cbqle0uqokt01kcogfgikslul",
    IDENTITY_POOL_ID: "us-east-1:e87c8320-3c72-4426-8969-2d163bfc4e3c"
  },
  STRIPE_KEY: "pk_test_51HTTfmC7JfGqLGZFb76LluZwg1c6LVl8afHtB6Jwgw1j1SvYjST4OROxFP6yzQWRpDeRTEJelRRUlzrTTDnZv2QY00fM0Zi3Gv"
};
