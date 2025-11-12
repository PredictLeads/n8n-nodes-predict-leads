import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import {
	retrieveCompanyOperation,
	retrieveCompaniesOperation,
	retrieveCompaniesFields,
	retrieveCompanyJobOpeningsOperation,
	retrieveCompanyJobOpeningsFields,
	retrieveSingleJobOpeningOperation,
	retrieveListOfJobOpeningsOperation,
	retrieveListOfJobOpeningsFields,
	retrieveTechnologiesUsedByCompanyOperation,
	retrieveCompaniesUsingSpecificTechnologyOperation,
	retrieveAllTrackedTechnologiesOperation,
	retrieveAllTrackedTechnologiesFields,
	retrieveSingleTechnologyByIdOrFuzzyNameOperation,

	technologyIdOrFuzzyNameFields,
	idFields,
	domainFields,
	locationFields,
	seenAtRangeFields,
	paginationFields,
} from './descriptions';

export class PredictLeads implements INodeType {
	description: INodeTypeDescription =
	{
		displayName: 'PredictLeads',
		name: 'predictLeads',
		icon: 'file:predictleads-favicon.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter.resource + ": " + $parameter.operation}}',
		description: 'Get company insights from PredictLeads\' official node',
		defaults: { name: 'PredictLeads' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials:
		[
			{
				name: 'predictLeadsApi',
				required: true
			},
		],
		requestDefaults:
		{
			baseURL: 'https://predictleads.com/api/v3',
			headers:
			{
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-Api-Key': '={{ ($credentials.apiKey || "").trim() }}',
				'X-Api-Token': '={{ ($credentials.apiToken || "").trim() }}',
			},
		},

		properties:
		[
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options:
				[
					{
						name: 'Companies',
						value: 'companies',
					},
					{
						name: 'Job Openings',
						value: 'jobOpenings',
					},
					{
						name: 'Technologies',
						value: 'technologies',
					},
					{
						name: 'News Events',
						value: 'newsEvents',
					},
					{
						name: 'Connections',
						value: 'connections',
					},
				],
				default: 'companies',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['companies'],
					},
				},
				options: [
					retrieveCompanyOperation,
					retrieveCompaniesOperation,
				],
				default: 'retrieveCompany',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['jobOpenings'],
					},
				},
				options: [
					retrieveCompanyJobOpeningsOperation,
					retrieveSingleJobOpeningOperation,
					retrieveListOfJobOpeningsOperation,
				],
				default: 'retrieveCompanyJobOpenings',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['technologies'],
					},
				},
				options: [
					retrieveTechnologiesUsedByCompanyOperation,
					retrieveCompaniesUsingSpecificTechnologyOperation,
					retrieveAllTrackedTechnologiesOperation,
					retrieveSingleTechnologyByIdOrFuzzyNameOperation,
				],
				default: 'retrieveTechnologiesUsedByCompany',
			},

			// Companies Fields
			...retrieveCompaniesFields,
			// Job Openings Fields
			...retrieveCompanyJobOpeningsFields,
			...retrieveListOfJobOpeningsFields,
			// Technologies Fields
			...retrieveAllTrackedTechnologiesFields,
			// Common Technology Fields
			...technologyIdOrFuzzyNameFields,
			// Common Fields
			...idFields,
			...domainFields,
			...locationFields,
			...seenAtRangeFields,
			...paginationFields,
		],
	};
}
