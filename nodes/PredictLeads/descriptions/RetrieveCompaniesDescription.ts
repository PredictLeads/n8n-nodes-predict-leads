import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompaniesOperation: INodePropertyOptions = {
	name: 'Retrieve Companies',
	value: 'retrieveCompanies',
	action: 'Retrieve Companies',
	description: 'Returns a list of companies filtered by their location and size, ordered by last updated date',
	routing: {
		request: {
			method: 'GET',
			url: '=/discover/companies',
			qs: {
				location: '={{ $parameter.location }}',
				sizes: '={{ $parameter.sizes }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
			arrayFormat: 'brackets',
		},
	},
};

export const retrieveCompaniesFields: INodeProperties[] = [
	{
		// TODO: Sizes should be an array
		displayName: 'Sizes',
		name: 'sizes',
		type: 'multiOptions',
		required: true,
		displayOptions: {
			show: {
				operation: ['retrieveCompanies'],
			},
		},
		options: [
			{
				name: '1',
				value: '1',
			},
			{
				name: '2-10',
				value: '2-10',
			},
			{
				name: '11-50',
				value: '11-50',
			},
			{
				name: '51-200',
				value: '51-200',
			},
			{
				name: '201-500',
				value: '201-500',
			},
			{
				name: '501-1,000',
				value: '501-1000',
			},
			{
				name: '1,001-5,000',
				value: '1001-5000',
			},
			{
				name: '5,001-10,000',
				value: '5001-10000',
			},
			{
				name: '10,000+',
				value: '10,000+',
			},
		],
		default: [],
		description: 'An array of one or more valid company sizes',
	},
];