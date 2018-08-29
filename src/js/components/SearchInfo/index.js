import { connect } from 'react-redux';
import searchInfo from './SearchInfo';

function mapStoreToProps(store) {
    return {
        name: store.search.name
    };
}

export default connect(mapStoreToProps)(searchInfo);