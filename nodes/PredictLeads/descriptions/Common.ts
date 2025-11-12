import type { INodeProperties } from 'n8n-workflow';

export const idFields: INodeProperties[] = [
    {
        displayName: 'ID',
        name: 'id',
        type: 'string',
		required: true,
        displayOptions: {
            show: {
                operation: [
                    'retrieveSingleJobOpening',
                    'retrieveSingleNewsEvent',
                ],
            },
        },
        default: '',
        description: 'UUID',
    },
];

export const domainFields: INodeProperties[] = [
    {
        displayName: 'Domain',
        name: 'domain',
        type: 'string',
		required: true,
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompany',
                    'retrieveCompanyJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompanyNewsEvents',
                    'retrieveCompanyFinancingEvents',
                    'retrieveCompanyConnections',
                ],
            },
        },
        default: '',
        description: 'Company\'s domain.',
    },
];

export const locationFields: INodeProperties[] = [
    {
		displayName: 'Location',
		name: 'location',
		type: 'string',
        // TODO: location is not always required
		required: true,
		displayOptions: {
			show: {
				operation: [
                    'retrieveCompanies',
                    'retrieveListOfJobOpenings',
                ],
			},
		},
		default: '',
		description: 'The response will include only companies located in the given country name or state name/abbreviation.',
	},
];

export const seenAtRangeFields: INodeProperties[] = [
    // TODO: How to sent empty values?
    {
        displayName: 'First Seen At From',
        name: 'firstSeenAtFrom',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanyJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrieveCompanyFinancingEvents',
                    'retrieveCompanyConnections',
                    'retrievePortfolioCompanies',
                ],
            },
        },
        default: '',
        description: 'Only return results first seen after given date (ISO 8601).',
    },
    {
        displayName: 'First Seen At Until',
        name: 'firstSeenAtUntil',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanyJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrieveCompanyFinancingEvents',
                    'retrieveCompanyConnections',
                    'retrievePortfolioCompanies',
                ],
            },
        },
        default: '',
        description: 'Only return results first seen before given date (ISO 8601).',
    },
    {
        displayName: 'Last Seen At From',
        name: 'lastSeenAtFrom',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanyJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrievePortfolioCompanies',
                ],
            },
        },
        default: '',
        description: 'Only return results last seen after given date (ISO 8601).',
    },
    {
        displayName: 'Last Seen At Until',
        name: 'lastSeenAtUntil',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanyJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrievePortfolioCompanies',
                ],
            },
        },
        default: '',
        description: 'Only return results last seen before given date (ISO 8601).',
    },
];

export const paginationFields: INodeProperties[] = [
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanies',
                    'retrieveCompanyJobOpenings',
                    'retrieveListOfJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrieveAllTrackedTechnologies',
                    'retrieveCompanyNewsEvents',
                    'retrieveCompanyFinancingEvents',
                ],
            },
        },
        default: 1,
        description: 'Page number of shown items.',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                operation: [
                    'retrieveCompanies',
                    'retrieveCompanyJobOpenings',
                    'retrieveListOfJobOpenings',
                    'retrieveTechnologiesUsedByCompany',
                    'retrieveCompaniesUsingSpecificTechnology',
                    'retrieveAllTrackedTechnologies',
                    'retrieveCompanyNewsEvents',
                    'retrieveCompanyFinancingEvents',
                ],
            },
        },
        default: 100,
        description: 'Limit the number of shown items per page.',
    },
];