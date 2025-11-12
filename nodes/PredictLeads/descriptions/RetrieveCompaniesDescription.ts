import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompaniesOperation: INodePropertyOptions = {
	name: 'Retrieve Companies',
	value: 'retrieveCompanies',
	action: 'Retrieve Companies',
	description: 'Returns a list of companies filtered by their location and size, ordered by last updated date.',
	routing: {
		request: {
			method: 'GET',
			url: '=/discover/companies',
			qs: {
				location: '={{ $parameter.location }}',
				sizes: '={{ $parameter.sizes }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			}
		},
	},
};

export const retrieveCompaniesFields: INodeProperties[] = [
	{
		// TODO: Sizes should be an array
		displayName: 'Sizes',
		name: 'sizes',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['retrieveCompanies'],
			},
		},
		default: '2-10',
		description: 'An array of one or more valid company sizes.',
	},
];