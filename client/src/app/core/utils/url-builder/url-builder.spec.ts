import {UrlBuilder} from './url-builder';
import {SegmentsUrl} from '@core/utils/segments-url/segments-url';
import {QueryStringParameters} from '@core/utils/query-string-parameters/query-string-parameters';

describe('UrlBuilder', () => {
  let urlBuilder: UrlBuilder;

  beforeEach(() => {
    urlBuilder = new UrlBuilder();
  });

  it('should return http://localhost:8080/api', () => {
    expect(urlBuilder.getUrl()).toBe('http://localhost:8080/api');
  });

  it('should return http://localhost:8080/api/user/12', () => {
    const segmentsUrl = new SegmentsUrl();
    segmentsUrl.push('user');
    segmentsUrl.push('12');
    expect(urlBuilder.getUrl(segmentsUrl)).toBe('http://localhost:8080/api/user/12');
  });

  it('http://localhost:8080/api/user/12?sort=desc&auth=true', () => {
    const segmentsUrl = new SegmentsUrl();
    segmentsUrl.push('user');
    segmentsUrl.push('12');
    const queryStringParameters = new QueryStringParameters();
    queryStringParameters.push('sort', 'desc');
    queryStringParameters.push('auth', 'true');
    expect(urlBuilder.getUrl(segmentsUrl, queryStringParameters)).toBe('http://localhost:8080/api/user/12?sort=desc&auth=true');
  });
});
