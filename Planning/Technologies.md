# Technologies 
>Monday, June 6, 2022 | 3:12 PM
 
## Databases

### DynamoDB - AWS Key-Value store
- Pay for what you use
  - Throughput
    - $1.25 per million write request units
    - $0.25 per million read request units
  - Data storage
    - First 25 GB per month is free - doubt we'd even come close to that
    - $0.25 per GB-month thereafter
- Benefits
  - AWS service that provisions, monitors, and keeps servers running. Should be easy to set up
  - Secure, uses AWS' IAM
  - Structured similarly to RDBMS, which will be good for students who are just beginning
  - [Some basic tutorials](https://aws.amazon.com/dynamodb/getting-started/)
- Drawbacks
  - Minimal querying 
  - Only 3 data types: number, string, binary

### MongoDB 
>Atlas - Cloud service on AWS, Azure, or GCP. We'd probably go for AWS.

-	Pricing is also pay for what you use
  - Shared
    - Free forever
    - CPUs and RAM are shared
  - Serverless
    - $0.30/million reads
    - Maybe we should have the students start with shared and then move into serverless?
-	Benefits
  - Strong querying abilities
  - More data types
  - Larger document size
  - [Has MongoDB university](https://university.mongodb.com/), which we could sub in for the MySQL part of web 201 
  - Has the ability to build an app
-	Drawbacks
  - Not secure out of the box -- we have to configure that
  - Potentially requires higher skill level

## User Log Ins

### AWS Cognito
- Get started for free with 50k active users/month with AWS free tier
- Easy integration with apps
- Easily communicate with other services already in AWS
- I think this should be a 'nice to have' feature if everything else can get accomplished
- Allows for social sign-in, like log in with your Google account