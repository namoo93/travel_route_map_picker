import React, { useEffect, useRef, useState } from 'react';
import MapList from '../templates/MapList';
import MapListDetails from '../templates/MapListDetails';
import MapListEnter from '../templates/MapListEnter';
import MapTargetList from '../templates/MapTargetList';
import ModalPortal from '../templates/ModalPortal';
import Initial from '../UI/organisms/Initial';
// import Modal from 'react-awesome-modal';

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.56575070868735, 126.97685985928288), //지도의 중심좌표.
  level: 5, //지도의 레벨(확대, 축소 정도)
};

const MapMain = () => {
  //카카오 지도
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  //모달
  const [modalOpened, setModalOpened] = useState(true);

  return (
    <div className="map_main" id="root_modal">
      <div className="map_kakao">
        <div ref={container} className="map" style={{ width: '100vw', height: '100vh' }}></div>
      </div>
      <MapList />

      {/* 모달 */}
      {/* 최초 리스트 이름 생성 모달 */}
      {modalOpened && (
        <ModalPortal>
          <Initial setModalOpened={setModalOpened} />
        </ModalPortal>
      )}

      {/* 메모상세 등록 팝업
      { && (
        <ModalPortal closePortal={handleClose}>
          <MapListDetails />
        </ModalPortal>
      )}
      메모상세 팝업
      { && (
        <ModalPortal closePortal={handleClose}>
          <MapListEnter />
        </ModalPortal>
      )} */}
      {<MapTargetList />}
    </div>
  );
};

export default MapMain;
