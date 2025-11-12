import type { INodePropertyOptions } from 'n8n-workflow';

export const retrieveSingleJobOpeningOperation: INodePropertyOptions = {
	name: 'Retrieve Single Job Opening',
	value: 'retrieveSingleJobOpening',
	action: 'Retrieve Single Job Opening',
	description: 'Returns a single Job Opening.',
	routing: {
		request: {
			method: 'GET',
			url: '=/job_openings/{{$parameter.id}}',
		},
	},
};