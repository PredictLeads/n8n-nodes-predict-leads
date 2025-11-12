import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveListOfJobOpeningsOperation: INodePropertyOptions = {
	name: 'Retrieve a List of Job Openings',
	value: 'retrieveListOfJobOpenings',
	action: 'Retrieve a List of Job Openings',
	description: 'Returns a list of Job Openings filtered by a given profession (e.g. "Sales Engineers" or "Marketing Managers") using O*NET occupation codes and/or location of the company.',
	routing: {
		request: {
			method: 'GET',
			url: '=/discover/job_openings',
			qs: {
				location: '={{ $parameter.location }}',
				onet_codes: '={{ $parameter.onetCodes }}',
			}
		},
	},
};

export const retrieveListOfJobOpeningsFields: INodeProperties[] = [
	{
		displayName: 'O*NET Codes',
		name: 'onetCodes',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['retrieveListOfJobOpenings'],
			},
		},
		default: '',
		description: 'Comma-separated O*NET codes to filter by, such as "17-2071.00" for "Electrical Engineers" or "15-1254.00" for "Web Developers". For full list of possible codes see: https://www.onetonline.org/find/all.',
	},
];