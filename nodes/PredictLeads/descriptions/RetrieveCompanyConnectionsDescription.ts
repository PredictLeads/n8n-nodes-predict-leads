import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyConnectionsOperation: INodePropertyOptions = {
	name: 'Retrieve Company Connections',
	value: 'retrieveCompanyConnections',
	action: 'Retrieve Company Connections',
	description: 'Returns a list of company\'s Connections.',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/connections',
			qs: {
				first_seen_at_from: '={{ $parameter.firstSeenAtFrom }}',
				first_seen_at_until: '={{ $parameter.firstSeenAtUntil }}',
				categories: '={{ $parameter.categories.join(",") }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			},
		},
	},
};

export const retrieveCompanyConnectionsFields: INodeProperties[] = [
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'multiOptions',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyConnections'],
			},
		},
		options: [
			{
				name: 'partner',
				value: 'partner',
				description: 'A partner relationship signals a collaboration between companies that goes both in two directions. You will find such connections using titles as "We work with", "Our partners", "The company we keep", and other titles similar in meaning. The implications of this category can be quite wide in their meaning, but in general all partnerships are a positive signal.',
			},
			{
				name: 'vendor',
				value: 'vendor',
				description: 'The vendor category means that company1 is a supplier for company2 in some way. All vendor relationships are positive, although some are more positive than others. On a webpage, such connections can be seen in lists such as "Our customers", "Trusted by", "Enabling businesses to", etc. The vendor category can also be used to determine the supply chain of a certain company and evaluate supply chain risks.',
			},
			{
				name: 'integration',
				value: 'integration',
				description: 'Most of the time an integration happens between a platform and a service.',
			},
			{
				name: 'investor',
				value: 'investor',
				description: 'The investor category identifies relationships between companies making investments (Company1) and companies receiving investments (Company2). One could also track what companies/sectors competitors are investing in.',
			},
			{
				name: 'parent',
				value: 'parent',
				description: 'Parent category defines a parent-subsidiary relationship between websites. In some cases such websites are only localized versions for specific markets.',
			},
			{
				name: 'rebranding',
				value: 'rebranding',
				description: 'Company1 being a rebranding of Company2 suggests that Company2 has undergone a process to change its brand identity.',
			},
			{
				name: 'published_in',
				value: 'published_in',
				description: 'The published_in category is usually found on early stage startup websites with fewer accomplishments on the market, but positive press coverage. You can see such connections under titles such as "As seen in", "Featured in", "Talking about us", etc.',
			},
			{
				name: 'badge',
				value: 'badge',
				description: 'The badge category shows that the Company1 has a certificate issued by the Company2 e.g. SOC 2 Type 2, ISO 27001, or some other common badges like GDPR, CCPA, etc.',
			},
			{
				name: 'other',
				value: 'other',
				description: 'This is the most general category. If we detected a relationship between companies, but we were unsure which category it belonged to, or it didn\'t belong to any of our categories, then we would categorize it as other.',
			},
		],
		default: '',
		description: 'Comma-separated (,) Connection categories.',
	},
];