import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return{
        cityInfo: store.search.selected
    };
}

export default connect(mapStoreToProps)(CityInfo);