import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyWebsiteEvolutionOperation: INodePropertyOptions = {
	name: 'Retrieve Company Website Evolution',
	value: 'retrieveCompanyWebsiteEvolution',
	action: 'Retrieve Company Website Evolution',
	description: 'Returns a list of company\'s Website Evolution',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/website_evolution',
			qs: {
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
		},
	},
};