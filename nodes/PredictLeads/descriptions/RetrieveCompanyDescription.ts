import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyOperation: INodePropertyOptions = {
	name: 'Retrieve Company',
	value: 'retrieveCompany',
	action: 'Retrieve Company',
	description: 'Returns Company.',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}',
		},
	},
};