import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyFinancingEventsOperation: INodePropertyOptions = {
	name: 'Retrieve Company Financing Events',
	value: 'retrieveCompanyFinancingEvents',
	action: 'Retrieve Company Financing Events',
	description: 'Returns a list of company\'s Financing Events',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/financing_events',
			qs: {
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
		},
	},
};