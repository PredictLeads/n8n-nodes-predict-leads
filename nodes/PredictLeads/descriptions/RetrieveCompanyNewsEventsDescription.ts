import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyNewsEventsOperation: INodePropertyOptions = {
	name: 'Retrieve Company News Events',
	value: 'retrieveCompanyNewsEvents',
	action: 'Retrieve Company News Events',
	description: 'Returns a list of company\'s News Events.',
	routing: {
		request: {
			method: 'GET',
			url: '=/companies/{{$parameter.domain}}/news_events',
			qs: {
				found_at_from: '={{ $parameter.foundAtFrom }}',
				found_at_until: '={{ $parameter.foundAtUntil }}',
				categories: '={{ $parameter.categories.join(",") }}',
				page: '={{ $parameter.page }}',
				limit: '={{ $parameter.limit }}',
			}
		},
	},
};

export const retrieveCompanyNewsEventsFields: INodeProperties[] = [
	// TODO: How to sent empty values?
    {
        displayName: 'Found At From',
        name: 'foundAtFrom',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: ['retrieveCompanyNewsEvents'],
            },
        },
        default: '',
        description: 'Only return NewsEvents found after given date (ISO 8601).',
    },
    {
        displayName: 'Found At Until',
        name: 'foundAtUntil',
        type: 'dateTime',
        displayOptions: {
            show: {
                operation: ['retrieveCompanyNewsEvents'],
            },
        },
        default: '',
        description: 'Only return NewsEvents found before given date (ISO 8601).',
    },
	{
		displayName: 'Categories',
		name: 'categories',
		type: 'multiOptions',
		displayOptions: {
			show: {
				operation: ['retrieveCompanyNewsEvents'],
			},
		},
		options: [
			{
				name: 'acquires',
				value: 'acquires',
				description: 'Company acquired another company.',
			},
			{
				name: 'merges_with',
				value: 'merges_with',
				description: 'Company merges with another company.',
			},
			{
				name: 'sells_assets_to',
				value: 'sells_assets_to',
				description: 'Company sells assets (like properties or warehouses) to other company.',
			},
			{
				name: 'signs_new_client',
				value: 'signs_new_client',
				description: 'Company signs new client.',
			},
			{
				name: 'files_suit_against',
				value: 'files_suit_against',
				description: 'Company files suit against other company.',
			},
			{
				name: 'has_issues_with',
				value: 'has_issues_with',
				description: 'Company has vulnerability problems.',
			},
			{
				name: 'closes_offices_in',
				value: 'closes_offices_in',
				description: 'Company closes existing offices.',
			},
			{
				name: 'decreases_headcount_by',
				value: 'decreases_headcount_by',
				description: 'Company lays off employees.',
			},
			{
				name: 'attends_event',
				value: 'attends_event',
				description: 'Company attends an event.',
			},
			{
				name: 'expands_facilities',
				value: 'expands_facilities',
				description: 'Company opens new or expands existing facilities like warehouses, data centers, manufacturing plants etc.',
			},
			{
				name: 'expands_offices_in',
				value: 'expands_offices_in',
				description: 'Company expands existing offices.',
			},
			{
				name: 'expands_offices_to',
				value: 'expands_offices_to',
				description: 'Company opens new offices in another town, state, country or continent.',
			},
			{
				name: 'increases_headcount_by',
				value: 'increases_headcount_by',
				description: 'Company offers new job vacancies.',
			},
			{
				name: 'opens_new_location',
				value: 'opens_new_location',
				description: 'Company opens new service location like hotels, restaurants, bars, hospitals etc.',
			},
			{
				name: 'goes_public',
				value: 'goes_public',
				description: 'Company issues shares to the public for the first time.',
			},
			{
				name: 'invests_into',
				value: 'invests_into',
				description: 'Company invests into other company.',
			},
			{
				name: 'invests_into_assets',
				value: 'invests_into_assets',
				description: 'Company buys assets (like properties or warehouses) from other company.',
			},
			{
				name: 'receives_financing',
				value: 'receives_financing',
				description: 'Company receives financing like venture funding, loan, grant etc.',
			},
			{
				name: 'hires',
				value: 'hires',
				description: 'Company hired new executive or senior personnel.',
			},
			{
				name: 'leaves',
				value: 'leaves',
				description: 'Executive or senior personnel left the company.',
			},
			{
				name: 'promotes',
				value: 'promotes',
				description: 'Company promoted existing executive or senior personnel.',
			},
			{
				name: 'retires_from',
				value: 'retires_from',
				description: 'Executive or senior personnel retire from the company.',
			},
			{
				name: 'integrates_with',
				value: 'integrates_with',
				description: 'Company integrates with other company.',
			},
			{
				name: 'is_developing',
				value: 'is_developing',
				description: 'Company is developing a new offering.',
			},
			{
				name: 'launches',
				value: 'launches',
				description: 'Company launches new offering.',
			},
			{
				name: 'partners_with',
				value: 'partners_with',
				description: 'Company partners with other company.',
			},
			{
				name: 'receives_award',
				value: 'receives_award',
				description: 'Company or person at the company receives an award.',
			},
			{
				name: 'recognized_as',
				value: 'recognized_as',
				description: 'Company or person at the company receives recognition.',
			},
			{
				name: 'identified_as_competitor_of',
				value: 'identified_as_competitor_of',
				description: 'New or existing competitor was identified.',
			},
		],
		default: '',
		description: 'Comma-separated (,) NewsEvent categories.',
	},
];