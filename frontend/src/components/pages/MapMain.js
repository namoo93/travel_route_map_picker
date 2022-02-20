import MapList from '../templates/MapList';
import MapListDetails from '../templates/MapListDetails';
import MapListEnter from '../templates/MapListEnter';
import MapTargetList from '../templates/MapTargetList';

const MapMain = () => {
	return (
		<div className="map_main">
			<div className="map_kakao"></div>

			<MapList />
			<MapListDetails />
			<MapListEnter />

			{<MapTargetList />}
		</div>
	);
};

export default MapMain;
