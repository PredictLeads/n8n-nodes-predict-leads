import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveTechnologiesUsedByCompanyOperation: INodePropertyOptions = {
	name: 'Retrieve Technologies used by specific Company',
	value: 'retrieveTechnologiesUsedByCompany',
	action: 'Retrieve Technologies used by specific Company',
	description: 'Returns Technologies used by a specific Company as a list of Technology Detections.',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/technology_detections',
			qs: {
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				last_seen_at_from: '={{ $parameter.lastSeenAtFrom }}',
				last_seen_at_until: '={{ $parameter.lastSeenAtUntil }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			}
		},
	},
};