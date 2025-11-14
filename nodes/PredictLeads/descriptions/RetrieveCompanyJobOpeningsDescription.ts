import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyJobOpeningsOperation: INodePropertyOptions = {
	name: 'Retrieve Company Job Openings',
	value: 'retrieveCompanyJobOpenings',
	action: 'Retrieve Company Job Openings',
	description: 'Returns a list of company\'s Job Openings',
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
		default: false,
		description: 'Set to true if you\'d like to receive JobOpenings that are not closed, have last_seen_at more recent than 5 days and were found in the last year',
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
		default: false,
		description: 'Similar to active_only, but without considering last_seen_at timestamp',
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
		default: false,
		description: 'Only return JobOpenings that have description',
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
		default: false,
		description: 'Only return JobOpenings that have location',
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
				name: 'Administration',
				value: 'administration',
			},
			{
				name: 'Consulting',
				value: 'consulting',
			},
			{
				name: 'Data Analysis',
				value: 'data_analysis',
			},
			{
				name: 'Design',
				value: 'design',
			},
			{
				name: 'Directors',
				value: 'directors',
			},
			{
				name: 'Education',
				value: 'education',
			},
			{
				name: 'Engineering',
				value: 'engineering',
			},
			{
				name: 'Finance',
				value: 'finance',
			},
			{
				name: 'Healthcare Services',
				value: 'healthcare_services',
			},
			{
				name: 'Human Resources',
				value: 'human_resources',
			},
			{
				name: 'Information Technology',
				value: 'information_technology',
			},
			{
				name: 'Internship',
				value: 'internship',
			},
			{
				name: 'Legal',
				value: 'legal',
			},
			{
				name: 'Management',
				value: 'management',
			},
			{
				name: 'Marketing',
				value: 'marketing',
			},
			{
				name: 'Military and Protective Services',
				value: 'military_and_protective_services',
			},
			{
				name: 'Operations',
				value: 'operations',
			},
			{
				name: 'Purchasing',
				value: 'purchasing',
			},
			{
				name: 'Product Management',
				value: 'product_management',
			},
			{
				name: 'Quality Assurance',
				value: 'quality_assurance',
			},
			{
				name: 'Real Estate',
				value: 'real_estate',
			},
			{
				name: 'Research',
				value: 'research',
			},
			{
				name: 'Sales',
				value: 'sales',
			},
			{
				name: 'Software Development',
				value: 'software_development',
			},
			{
				name: 'Support',
				value: 'support',
			},
			{
				name: 'Manual Work',
				value: 'manual_work',
			},
			{
				name: 'Food',
				value: 'food',
			},
		],
		default: [],
		description: 'Comma-separated (,) JobOpening categories',
	},
];