import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveSingleTechnologyByIdOrFuzzyNameOperation: INodePropertyOptions = {
	name: 'Retrieve a Single Technology by ID or Fuzzy Name',
	value: 'retrieveSingleTechnologyByIdOrFuzzyName',
	action: 'Retrieve a Single Technology by ID or Fuzzy Name',
	description: 'Returns a single Technology.',
	routing: {
		request: {
			method: 'GET',
			url: '=/technologies/{{$parameter.idOrFuzzyName}}',
		},
	},
};