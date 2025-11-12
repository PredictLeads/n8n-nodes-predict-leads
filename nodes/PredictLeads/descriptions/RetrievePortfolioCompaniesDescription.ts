import type { INodePropertyOptions } from 'n8n-workflow';

export const retrievePortfolioCompaniesOperation: INodePropertyOptions = {
	name: 'Retrieve Portfolio Companies',
	value: 'retrievePortfolioCompanies',
	action: 'Retrieve Portfolio Companies',
	description: 'Returns the Portfolio Companies found on the portfolio pages of thousands of VCs, accelerators, and incubators, as a list of Connections categorized as investor, ordered by the first_seen_at, descending.',
	routing: {
		request: {
			method: 'GET',
			url: '=/discover/portfolio_companies/connections',
			qs: {
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				last_seen_at_from: '={{ $parameter.lastSeenAtFrom }}',
				last_seen_at_until: '={{ $parameter.lastSeenAtUntil }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
		},
	},
};