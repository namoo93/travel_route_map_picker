import React from 'react';
import MapList from '../templates/MapList';
import MapListDetails from '../templates/MapListDetails';
import MapListEnter from '../templates/MapListEnter';
import MapTargetList from '../templates/MapTargetList';
import Modal from 'react-awesome-modal';
import Initial from '../UI/organisms/Initial';

const MapMain = () => {
  return (
    <div className="map_main">
      <div className="map_kakao"></div>
      <MapList />

      {/* 모달 */}
      {/* 최초 리스트 이름 생성 모달 (visible) */}
      <Modal effect="fadeInUp" width="400px" height="200px">
        <Initial />
      </Modal>

      {/* 메모상세 등록 팝업 */}
      <Modal effect="fadeInUp" width="50%" height="90%">
        <MapListDetails />
      </Modal>

      {/* 메모상세 팝업 */}
      <Modal effect="fadeInUp" width="50%" height="90%">
        <MapListEnter />
      </Modal>
      {<MapTargetList />}
    </div>
  );
};

export default MapMain;
