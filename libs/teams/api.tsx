import {
  DynamoDBDocumentClient,
  QueryCommand, ScanCommand
} from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}))
export async function fetchTeams(): Promise<Team[]> {
  const req = new ScanCommand({ TableName: 'sre.teams' })
  const res = await client.send(req)
  return res['Items'] as Team[]
}

export async function fetchTeam(name: string): Promise<Team> {
  const req = new QueryCommand({
    TableName: 'sre.teams',
    KeyConditionExpression: `id=:team`,
    ExpressionAttributeValues: { ':team': name }
  })
  const res = await client.send(req)
  const teams = res['Items'] as Team[]
  return teams[0]
}