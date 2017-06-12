import DATA_TYPES from '../../utils/constants/dataTypes';
class HttpMapper {
    constructor(requestMapper, responseMapper) {
        let defaultMapper = data => data;
        this.responseMapper = typeof requestMapper === DATA_TYPES.FUNCTION ? requestMapper : defaultMapper;
        this.requestMapper = typeof responseMapper === DATA_TYPES.FUNCTION ? responseMapper : defaultMapper;
    }
    static isHttpMapper(mapper) {
        return mapper instanceof HttpMapper;
    }
}
export default HttpMapper;
