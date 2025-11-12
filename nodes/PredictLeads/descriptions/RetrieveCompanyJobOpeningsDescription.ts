import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyJobOpeningsOperation: INodePropertyOptions = {
	name: 'Retrieve Company Job Openings',
	value: 'retrieveCompanyJobOpenings',
	action: 'Retrieve Company Job Openings',
	description: 'Returns a list of company\'s Job Openings.',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/job_openings',
			qs: {
				active_only: '={{ $parameter.activeOnly }}',
				not_closed: '={{ $parameter.notClosed }}',
				with_description_only: '={{ $parameter.withDescriptionOnly }}',
				with_location_only: '={{ $parameter.withLocationOnly }}',
				categories: '={{ $parameter.categories.join(",") }}',
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				last_seen_at_from: '={{ $parameter.lastSeenAtFrom }}',
				last_seen_at_until: '={{ $parameter.lastSeenAtUntil }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
		},
	},
};

export const retrieveCompanyJobOpeningsFields: INodeProperties[] = [
	{
		displayName: 'Active Only',
		name: 'activeOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyJobOpenings'],
			},
		},
		default: '',
		description: 'Set to true if you\'d like to receive JobOpenings that are not closed, have last_seen_at more recent than 5 days and were found in the last year.',
	},
	{
		displayName: 'Not Closed',
		name: 'notClosed',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyJobOpenings'],
			},
		},
		default: '',
		description: 'Similar to active_only, but without considering last_seen_at timestamp.',
	},
	{
		displayName: 'With Description Only',
		name: 'withDescriptionOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyJobOpenings'],
			},
		},
		default: '',
		description: 'Only return JobOpenings that have description.',
	},
	{
		displayName: 'With Location Only',
		name: 'withLocationOnly',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyJobOpenings'],
			},
		},
		default: '',
		description: 'Only return JobOpenings that have location.',
	},
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'multiOptions',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyJobOpenings'],
			},
		},
		options: [
			{
				name: 'administration',
				value: 'administration',
			},
			{
				name: 'consulting',
				value: 'consulting',
			},
			{
				name: 'data_analysis',
				value: 'data_analysis',
			},
			{
				name: 'design',
				value: 'design',
			},
			{
				name: 'directors',
				value: 'directors',
			},
			{
				name: 'education',
				value: 'education',
			},
			{
				name: 'engineering',
				value: 'engineering',
			},
			{
				name: 'finance',
				value: 'finance',
			},
			{
				name: 'healthcare_services',
				value: 'healthcare_services',
			},
			{
				name: 'human_resources',
				value: 'human_resources',
			},
			{
				name: 'information_technology',
				value: 'information_technology',
			},
			{
				name: 'internship',
				value: 'internship',
			},
			{
				name: 'legal',
				value: 'legal',
			},
			{
				name: 'management',
				value: 'management',
			},
			{
				name: 'marketing',
				value: 'marketing',
			},
			{
				name: 'military_and_protective_services',
				value: 'military_and_protective_services',
			},
			{
				name: 'operations',
				value: 'operations',
			},
			{
				name: 'purchasing',
				value: 'purchasing',
			},
			{
				name: 'product_management',
				value: 'product_management',
			},
			{
				name: 'quality_assurance',
				value: 'quality_assurance',
			},
			{
				name: 'real_estate',
				value: 'real_estate',
			},
			{
				name: 'research',
				value: 'research',
			},
			{
				name: 'sales',
				value: 'sales',
			},
			{
				name: 'software_development',
				value: 'software_development',
			},
			{
				name: 'support',
				value: 'support',
			},
			{
				name: 'manual_work',
				value: 'manual_work',
			},
			{
				name: 'food',
				value: 'food',
			},
		],
		default: '',
		description: 'Comma-separated (,) JobOpening categories.',
	},
];