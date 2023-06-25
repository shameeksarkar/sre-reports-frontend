import boto3
import re

db = boto3.resource('dynamodb')
table = db.Table('sre.teams')

teams = [
    "Web Platforms",
    "Mobile Platforms",
    "Backend Platforms",
    "Partner Ecosystem",
    "Support & Communication",
    "Two Wheelers",
    "Customer Growth & Engagement",
    "Mobile Platforms",
    "Trucks",
    "New Initiatives",
    "Salesforce",
    "Payments & Locations",
    "Allocation & Pricing",
]

for team in teams:
    slug = team.replace('&', '')
    slug = re.sub('\s+', '-', slug.lower())
    table.put_item(
        Item={
            'id': slug,
            'name': team
        }
    )
