import type {
  ICredentialType,
  INodeProperties,
  ICredentialTestRequest,
  Icon,
} from 'n8n-workflow';

export class PredictLeadsApi implements ICredentialType {
  name = 'predictLeadsApi';
  displayName = 'PredictLeads API';
  documentationUrl = 'https://docs.predictleads.com';
  icon: Icon = 'file:../icons/predictleads-favicon.svg';

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

  // No authenticate block here (we’ll add qs explicitly in the node)

  // Robust test: exact path, inline query, trim + encode
  test: ICredentialTestRequest = {
    request: {
      method: 'GET',
      baseURL: '={{ $credentials.baseUrl.replace(/\\/+$/, "") }}', // strip trailing slash
      // no leading slash in url; inline the query string
      url: '=companies/github.com?api_key={{ encodeURIComponent(($credentials.apiKey || "").trim()) }}&api_token={{ encodeURIComponent(($credentials.apiToken || "").trim()) }}',
      headers: { Accept: 'application/json', 'User-Agent': 'n8n-PredictLeads/1.0' },
    },
  };
}
