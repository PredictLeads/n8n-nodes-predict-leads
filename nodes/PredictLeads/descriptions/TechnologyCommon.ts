import type { INodeProperties } from 'n8n-workflow';

export const technologyIdOrFuzzyNameFields: INodeProperties[] = [
	{
		displayName: 'ID or Fuzzy Name',
		name: 'idOrFuzzyName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrieveSingleTechnologyByIdOrFuzzyName',
                ],
			},
		},
		default: '',
		description: 'Technology\'s ID or fuzzy name',
	},
];