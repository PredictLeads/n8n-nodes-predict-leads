import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const retrieveCompanyNewsEventsOperation: INodePropertyOptions = {
	name: 'Retrieve Company News Events',
	value: 'retrieveCompanyNewsEvents',
	action: 'Retrieve Company News Events',
	description: 'Returns a list of company\'s News Events',
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
        description: 'Only return NewsEvents found after given date (ISO 8601)',
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
        description: 'Only return NewsEvents found before given date (ISO 8601)',
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
				name: 'Acquires',
				value: 'acquires',
				description: 'Company acquired another company',
			},
			{
				name: 'Merges with',
				value: 'merges_with',
				description: 'Company merges with another company',
			},
			{
				name: 'Sells assets to',
				value: 'sells_assets_to',
				description: 'Company sells assets (like properties or warehouses) to other company',
			},
			{
				name: 'Signs new client',
				value: 'signs_new_client',
				description: 'Company signs new client',
			},
			{
				name: 'Files suit against',
				value: 'files_suit_against',
				description: 'Company files suit against other company',
			},
			{
				name: 'Has issues with',
				value: 'has_issues_with',
				description: 'Company has vulnerability problems',
			},
			{
				name: 'Closes offices in',
				value: 'closes_offices_in',
				description: 'Company closes existing offices',
			},
			{
				name: 'Decreases headcount by',
				value: 'decreases_headcount_by',
				description: 'Company lays off employees',
			},
			{
				name: 'Attends event',
				value: 'attends_event',
				description: 'Company attends an event',
			},
			{
				name: 'Expands facilities',
				value: 'expands_facilities',
				description: 'Company opens new or expands existing facilities like warehouses, data centers, manufacturing plants etc',
			},
			{
				name: 'Expands offices in',
				value: 'expands_offices_in',
				description: 'Company expands existing offices',
			},
			{
				name: 'Expands offices to',
				value: 'expands_offices_to',
				description: 'Company opens new offices in another town, state, country or continent',
			},
			{
				name: 'Increases headcount by',
				value: 'increases_headcount_by',
				description: 'Company offers new job vacancies',
			},
			{
				name: 'Opens new location',
				value: 'opens_new_location',
				description: 'Company opens new service location like hotels, restaurants, bars, hospitals etc',
			},
			{
				name: 'Goes public',
				value: 'goes_public',
				description: 'Company issues shares to the public for the first time',
			},
			{
				name: 'Invests into',
				value: 'invests_into',
				description: 'Company invests into other company',
			},
			{
				name: 'Invests into assets',
				value: 'invests_into_assets',
				description: 'Company buys assets (like properties or warehouses) from other company',
			},
			{
				name: 'Receives financing',
				value: 'receives_financing',
				description: 'Company receives financing like venture funding, loan, grant etc',
			},
			{
				name: 'Hires',
				value: 'hires',
				description: 'Company hired new executive or senior personnel',
			},
			{
				name: 'Leaves',
				value: 'leaves',
				description: 'Executive or senior personnel left the company',
			},
			{
				name: 'Promotes',
				value: 'promotes',
				description: 'Company promoted existing executive or senior personnel',
			},
			{
				name: 'Retires from',
				value: 'retires_from',
				description: 'Executive or senior personnel retire from the company',
			},
			{
				name: 'Integrates with',
				value: 'integrates_with',
				description: 'Company integrates with other company',
			},
			{
				name: 'Is developing',
				value: 'is_developing',
				description: 'Company is developing a new offering',
			},
			{
				name: 'Launches',
				value: 'launches',
				description: 'Company launches new offering',
			},
			{
				name: 'Partners with',
				value: 'partners_with',
				description: 'Company partners with other company',
			},
			{
				name: 'Receives award',
				value: 'receives_award',
				description: 'Company or person at the company receives an award',
			},
			{
				name: 'Recognized as',
				value: 'recognized_as',
				description: 'Company or person at the company receives recognition',
			},
			{
				name: 'Identified as competitor of',
				value: 'identified_as_competitor_of',
				description: 'New or existing competitor was identified',
			},
		],
		default: [],
		description: 'Comma-separated (,) NewsEvent categories',
	},
];