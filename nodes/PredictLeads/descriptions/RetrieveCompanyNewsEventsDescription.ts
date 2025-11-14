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
				name: 'Attends Event',
				value: 'attends_event',
				description: 'Company attends an event',
			},
			{
				name: 'Closes Offices In',
				value: 'closes_offices_in',
				description: 'Company closes existing offices',
			},
			{
				name: 'Decreases Headcount By',
				value: 'decreases_headcount_by',
				description: 'Company lays off employees',
			},
			{
				name: 'Expands Facilities',
				value: 'expands_facilities',
				description: 'Company opens new or expands existing facilities like warehouses, data centers, manufacturing plants etc',
			},
			{
				name: 'Expands Offices In',
				value: 'expands_offices_in',
				description: 'Company expands existing offices',
			},
			{
				name: 'Expands Offices To',
				value: 'expands_offices_to',
				description: 'Company opens new offices in another town, state, country or continent',
			},
			{
				name: 'Files Suit Against',
				value: 'files_suit_against',
				description: 'Company files suit against other company',
			},
			{
				name: 'Goes Public',
				value: 'goes_public',
				description: 'Company issues shares to the public for the first time',
			},
			{
				name: 'Has Issues With',
				value: 'has_issues_with',
				description: 'Company has vulnerability problems',
			},
			{
				name: 'Hires',
				value: 'hires',
				description: 'Company hired new executive or senior personnel',
			},
			{
				name: 'Identified as Competitor Of',
				value: 'identified_as_competitor_of',
				description: 'New or existing competitor was identified',
			},
			{
				name: 'Increases Headcount By',
				value: 'increases_headcount_by',
				description: 'Company offers new job vacancies',
			},
			{
				name: 'Integrates With',
				value: 'integrates_with',
				description: 'Company integrates with other company',
			},
			{
				name: 'Invests Into',
				value: 'invests_into',
				description: 'Company invests into other company',
			},
			{
				name: 'Invests Into Assets',
				value: 'invests_into_assets',
				description: 'Company buys assets (like properties or warehouses) from other company',
			},
			{
				name: 'Is Developing',
				value: 'is_developing',
				description: 'Company is developing a new offering',
			},
			{
				name: 'Launches',
				value: 'launches',
				description: 'Company launches new offering',
			},
			{
				name: 'Leaves',
				value: 'leaves',
				description: 'Executive or senior personnel left the company',
			},
			{
				name: 'Merges With',
				value: 'merges_with',
				description: 'Company merges with another company',
			},
			{
				name: 'Opens New Location',
				value: 'opens_new_location',
				description: 'Company opens new service location like hotels, restaurants, bars, hospitals etc',
			},
			{
				name: 'Partners With',
				value: 'partners_with',
				description: 'Company partners with other company',
			},
			{
				name: 'Promotes',
				value: 'promotes',
				description: 'Company promoted existing executive or senior personnel',
			},
			{
				name: 'Receives Award',
				value: 'receives_award',
				description: 'Company or person at the company receives an award',
			},
			{
				name: 'Receives Financing',
				value: 'receives_financing',
				description: 'Company receives financing like venture funding, loan, grant etc',
			},
			{
				name: 'Recognized As',
				value: 'recognized_as',
				description: 'Company or person at the company receives recognition',
			},
			{
				name: 'Retires From',
				value: 'retires_from',
				description: 'Executive or senior personnel retire from the company',
			},
			{
				name: 'Sells Assets To',
				value: 'sells_assets_to',
				description: 'Company sells assets (like properties or warehouses) to other company',
			},
			{
				name: 'Signs New Client',
				value: 'signs_new_client',
				description: 'Company signs new client',
			},
		],
		default: [],
		description: 'Comma-separated (,) NewsEvent categories',
	},
];