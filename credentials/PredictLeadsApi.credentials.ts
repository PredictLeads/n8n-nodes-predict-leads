import type {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
  ICredentialTestRequest,
  Icon,
} from 'n8n-workflow';

export class PredictLeadsApi implements ICredentialType {
  name = 'predictLeadsApi';
  displayName = 'PredictLeads API';
  documentationUrl = 'https://docs.predictleads.com';
  icon: Icon = {
    light: 'file:../images/predictleads-favicon-purple.svg',
    dark: 'file:../images/predictleads-favicon-white.svg',
  };

  properties: INodeProperties[] = [
    {
      displayName: 'Authentication Key',
      name: 'apiKey',
      type: 'string',
      default: '',
      required: true,
      typeOptions: { password: true },
      description: 'Your personal Authentication key. You can find it under "API Subscriptions" section on "Your Subscription Plans" page.',
    },
    {
      displayName: 'Authentication Token',
      name: 'apiToken',
      type: 'string',
      default: '',
      required: true,
      typeOptions: { password: true },
      description: 'Your personal Authentication token. You can find it under "API Subscriptions" section on "Your Subscription Plans" page.',
    },
  ];

  authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-Api-Token': '={{$credentials.apiKey}}',
				'X-Api-Key': '={{$credentials.apiToken}}',
			},
		},
	};

  test: ICredentialTestRequest = {
    request: {
      method: 'GET',
      url: 'https://predictleads.com/api/v3/api_subscription',
    },
  };
}
