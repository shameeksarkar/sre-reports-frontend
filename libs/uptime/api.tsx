export async function fetchUptime(team: string) {
  return [
    ['daakiya-prod-ktor', 99.95, 99.97],
    ['daakiya-prod-ktor-external', 99.75, 99.86],
    ['daakiya-prod-sqs', 100.00, 100.00],
    ['echo-prod-ktor-external'],
    ['nexus-prod-ktor-external', 100.00, 99.87],
    ['nuclei-prod-ktor', 100.00, 100.00],
    ['nuclei-prod-ktor-external', 99.94, 99.95],
    ['oms-prod-server-customer-exp', 93.76, 97.53],
    ['rheo-prod-ktor', 100.00, 100.00],
    ['crm-graphql-prod'],
    ['crm-graphql-proxy-prod'],
    ['crm-prod-server', 99.98, 100.00],
    ['oms-prod-server-comms', 99.65, 99.61],
    ['oms-prod-sidekiq-comms', 99.41]
  ]
}