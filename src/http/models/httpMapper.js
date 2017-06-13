import DATA_TYPES from '../../utils/constants/dataTypes';
class HttpMapper {
    constructor(requestMapper, responseMapper) {
        const defaultMapper = data => data;
        this.responseMapper = typeof responseMapper === DATA_TYPES.FUNCTION ? responseMapper : defaultMapper;
        this.requestMapper = typeof requestMapper === DATA_TYPES.FUNCTION ? requestMapper : defaultMapper;
    }
    static isHttpMapper(mapper) {
        return mapper instanceof HttpMapper;
    }
}
export default HttpMapper;
