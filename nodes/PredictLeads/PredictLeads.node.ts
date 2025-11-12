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
	retrieveCompanyNewsEventsOperation,
	retrieveCompanyNewsEventsFields,
	retrieveSingleNewsEventOperation,
	retrieveCompanyFinancingEventsOperation,
	retrieveCompanyConnectionsOperation,
	retrieveCompanyConnectionsFields,
	retrievePortfolioCompaniesOperation,
	retrieveCompanyWebsiteEvolutionOperation,

	idFields,
	domainFields,
	technologyIdOrFuzzyNameFields,
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
						name: 'Technology Detections',
						value: 'technologyDetections',
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
						name: 'Financing Events',
						value: 'financingEvents',
					},
					{
						name: 'Connections',
						value: 'connections',
					},
					{
						name: 'Website Evolution',
						value: 'websiteEvolution',
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
						resource: ['technologyDetections'],
					},
				},
				options: [
					retrieveTechnologiesUsedByCompanyOperation,
					retrieveCompaniesUsingSpecificTechnologyOperation,
				],
				default: 'retrieveTechnologiesUsedByCompany',
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
					retrieveAllTrackedTechnologiesOperation,
					retrieveSingleTechnologyByIdOrFuzzyNameOperation,
				],
				default: 'retrieveAllTrackedTechnologies',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['newsEvents'],
					},
				},
				options: [
					retrieveCompanyNewsEventsOperation,
					retrieveSingleNewsEventOperation,
				],
				default: 'retrieveCompanyNewsEvents',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['financingEvents'],
					},
				},
				options: [
					retrieveCompanyFinancingEventsOperation,
				],
				default: 'retrieveCompanyFinancingEvents',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['connections'],
					},
				},
				options: [
					retrieveCompanyConnectionsOperation,
					retrievePortfolioCompaniesOperation,
				],
				default: 'retrieveCompanyConnections',
			},

			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions:
				{
					show: {
						resource: ['websiteEvolution'],
					},
				},
				options: [
					retrieveCompanyWebsiteEvolutionOperation,
				],
				default: 'retrieveCompanyWebsiteEvolution',
			},

			// Common Fields
			...idFields,
			...domainFields,
			// Companies Fields
			...retrieveCompaniesFields,
			// Job Openings Fields
			...retrieveCompanyJobOpeningsFields,
			...retrieveListOfJobOpeningsFields,
			// Technologies Fields
			...retrieveAllTrackedTechnologiesFields,
			// News Events Fields
			...retrieveCompanyNewsEventsFields,
			// Connections Fields
			...retrieveCompanyConnectionsFields,
			// Common Technology Fields
			...technologyIdOrFuzzyNameFields,
			// Common Fields
			...locationFields,
			...seenAtRangeFields,
			...paginationFields,
		],
	};
}
