import { connect } from 'react-redux';
import HistoryInfo from './HistoryInfo';


function mapStoreToProps(store) {
    return {
        HistoryInfo: store.search.all
    };
}

export default connect(mapStoreToProps)(HistoryInfo);