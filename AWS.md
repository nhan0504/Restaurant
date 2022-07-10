# Choosing AWS service
|| Simple website | Single Page Web App | Simple static website | Enterprise Web |
|-|-----|----|-----|----|
| Description | <ul><li>Consist of a single webserver</li><li>Best for low trafficked + Multiple author + Frequent content change</li><li>Best for blog, marketing website</li></ul> | <lu><li>Required only a single load in a web browser</li></ul> |<ul><li>Contain no server-side application code like PHP/ ASP.NET</li><li>Typically used to deliver personal or marketing sites</li></ul> | <ul><li>Very popular application-heavy website</li><li>Need to scale for high demand and traffic</li></ul> |
| Best for  | <ul><li>Website built using WordPress, Joomla, Drupal, Magento</li><li>Unlikely to scale over 5 servers</li><li>Ppl who want to manage their own web server and resources</li><li>Ppl who want 1 console to manage their web server, DNS, and networking</li></ul> | <ul><li>Website built using React JS, Angular JS, Vue JS, and NUXT</li><li>Website that have serverless backends</li></ul> | <ul><li>Website that change infrequently + few author</li><li>Ppl who don't want to manage infrastructer</li><li>Need to scale for high traffic occasionally</li></ul> |  <ul><li>Website that use at least 2 data centers + multiple web servers</li><li>Need to scale using load balancer, autoscaling, or external database</li></ul> | 
| AWS | Lightsail | Amplify Console | Amazon S3 <ul><li>Object storage -> Retrieve any amount of data from anywhere on the web</li></ul> | Amazon EC2 |

# Set up environment
- Generate access key in security credential
- Download and install AWS CLI
- Check the version of the AWS CLI -> Ensure AWS CLI is installed
```
aws --version
```
- Configure the AWS CLI enviroment using the access key generated above + region code 
```
aws configure

AWS Access Key ID [None]: 
AWS Secret Access Key [None]: 
Default region name [None]:
Default output format [None]: json
```
- Check if the enironment is configured
```
aws ec2 describe-vpcs

{
    "Vpcs": [
        {
            "CidrBlock": "172.31.0.0/16",
            "DhcpOptionsId": "dopt-086306defb0186c04",
            "State": "available",
            ...
        }
    ]
}
```
