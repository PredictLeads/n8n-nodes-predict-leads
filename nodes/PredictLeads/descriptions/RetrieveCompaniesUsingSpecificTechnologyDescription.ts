import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompaniesUsingSpecificTechnologyOperation: INodePropertyOptions = {
	name: 'Retrieve Companies using specific Technology ID or Fuzzy Name',
	value: 'retrieveCompaniesUsingSpecificTechnology',
	action: 'Retrieve Companies using specific Technology ID or Fuzzy Name',
	description: 'Returns Companies using a specific Technology as a list of Technology Detections, ordered by the first_seen_at, descending.',
	routing: {
		request: {
			method: 'GET',
			url: '=/discover/technologies/{{$parameter.idOrFuzzyName}}/technology_detections',
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