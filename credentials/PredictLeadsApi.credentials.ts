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
  icon: Icon = 'file:../nodes/PredictLeads/predictleads-favicon.svg';

  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
      required: true,
      typeOptions: { password: true },
      description: 'Your PredictLeads API key',
    },
    {
      displayName: 'API Token',
      name: 'apiToken',
      type: 'string',
      default: '',
      required: true,
      typeOptions: { password: true },
      description: 'Your PredictLeads API token',
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
      url: 'https://predictleads.com/api/v3/companies/predictleads.com',
    },
  };
}
