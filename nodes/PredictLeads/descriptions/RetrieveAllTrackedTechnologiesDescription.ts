import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveAllTrackedTechnologiesOperation: INodePropertyOptions = {
	name: 'Retrieve All Tracked Technologies',
	value: 'retrieveAllTrackedTechnologies',
	action: 'Retrieve All Tracked Technologies',
	description: 'Returns a list of all tracked Technologies',
	routing: {
		request: {
			method: 'GET',
			url: '=/technologies',
			qs: {
				fuzzy_name: '={{ $parameter.fuzzyName }}',
				order_by: '={{ $parameter.orderBy }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			}
		},
	},
};

export const retrieveAllTrackedTechnologiesFields: INodeProperties[] = [
	{
		displayName: 'Fuzzy Name',
		name: 'fuzzyName',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['retrieveAllTrackedTechnologies'],
			},
		},
		default: '',
		description: 'Filter results based on Technology\'s fuzzy name',
	},
	{
		displayName: 'Order By',
		name: 'orderBy',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['retrieveAllTrackedTechnologies'],
			},
		},
		options: [
			{
				name: 'Created At Ascending',
				value: 'created_at_asc',
				description: 'Order by created_at, ascending',
			},
			{
				name: 'Created At Descending',
				value: 'created_at_desc',
				description: 'Order by created_at, descending',
			},
			{
				name: 'Fuzzy Score Descending',
				value: 'fuzzy_score_desc',
				description: 'Order by fuzzy_score, descending. NOTE: Only available when fuzzy_name parameter is provided.',
			},
		],
		default: 'created_at_asc',
		description: 'Order of TechnologiesDatasets',
	},
];