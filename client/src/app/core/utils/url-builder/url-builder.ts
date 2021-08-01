import { QueryStringParameters } from '@core/utils/query-string-parameters/query-string-parameters';
import { ApiEndpointService } from '@core/services/api-endpoint-service/api-endpoint.service';
import { SegmentsUrl } from '@core/utils/segments-url/segments-url';

export class UrlBuilder {

  private url!: string;
  private queryString!: QueryStringParameters;
  private segmentOfPath!: SegmentsUrl | string;
  private apiEndpointService!: ApiEndpointService;

  constructor() {
    this.apiEndpointService = new ApiEndpointService();
    this.url = this.apiEndpointService.getDefaultApiEndpoint();
  }

  public  getUrl(segmentsOfPath?: SegmentsUrl, queryString?: QueryStringParameters): string {
    this.segmentOfPath = segmentsOfPath ? segmentsOfPath.toString() : '';
    this.url = this.segmentOfPath ? `${this.url}/${this.segmentOfPath}` : this.url;
    this.queryString = queryString || new QueryStringParameters();

    const queryParams: string = this.queryString ? this.queryString.toString() : '';
    return queryParams ? queryParams : this.url;
  }

}
