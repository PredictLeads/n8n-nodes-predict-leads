import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveSingleNewsEventOperation: INodePropertyOptions = {
	name: 'Retrieve Single News Event',
	value: 'retrieveSingleNewsEvent',
	action: 'Retrieve Single News Event',
	description: 'Returns specific News Event.',
	routing: {
		request: {
			method: 'GET',
			url: '=/news_events/{{$parameter.id}}',
		},
	},
};