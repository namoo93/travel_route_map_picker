import React, { useEffect, useRef, useState } from 'react';
import MapList from '../templates/MapList';
import MapListAdd from '../templates/MapListAdd';
import MapListEnter from '../templates/MapListEnter';
import MapTargetList from '../templates/MapTargetList';
import ModalPortal from '../templates/ModalPortal';
import Initial from '../UI/organisms/Initial';
// import Modal from 'react-awesome-modal';

const mapOptions = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(37.56575070868735, 126.97685985928288), //지도의 중심좌표.
  level: 5, //지도의 레벨(확대, 축소 정도)
  disableDoubleClick: true, // 클릭시 확대
  disableDoubleClickZoom: true, // 더블 클릭시 확대
};
const markerOptions = {
  //지도 마커 옵션
  image: new window.kakao.maps.MarkerImage('/img/Polygon_2.png', new window.kakao.maps.Size(16, 16)),
};

const MapMain = () => {
  //모달
  const [initialModal, setInitialModal] = useState(true);
  const [memoAddModal, setMemoAddModal] = useState(false);
  //카카오 지도
  const [addrInMap, setAddrInMap] = useState(''); //주소값
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  //
  const customInfoContent = `<div class="info_contents"> dsdsadadasda </div>`;

  useEffect(() => {
    const maps = new window.kakao.maps.Map(container.current, mapOptions); //지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new window.kakao.maps.services.Geocoder();

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 클릭한 위치를 표시할 마커입니다
    const marker = new window.kakao.maps.Marker(markerOptions);
    const customInfo = new window.kakao.maps.CustomOverlay({
      content: customInfoContent,
    });

    //지도 클릭시 마커와 상세 주소출력
    window.kakao.maps.event.addListener(maps, 'click', function (e) {
      //메모 상세 팝업
      //setMemoAddModal(true);

      searchDetailAddrFromCoords(e.latLng, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          let detailAddr = !!result[0].road_address ? '도로명 주소:' + result[0].road_address.address_name : '';
          detailAddr += ' 지번 주소:' + result[0].address.address_name;
          //결과 주소값 담기
          setAddrInMap(detailAddr);

          //마커위의 인포윈도우
          customInfo.setPosition(e.latLng);
          console.log(e.latLng);
          // 마커를 클릭한 위치에 표시합니다
          marker.setPosition(e.latLng);
          marker.setMap(maps);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          // customInfo.getVisible(true);
        }
      });

      //지도의 위치값에 정보를 불러옴
    });

    return maps;
  }, []);

  return (
    <div className="map_main" id="root_modal">
      <div className="map_kakao">
        <div ref={container} className="map" style={{ width: '100vw', height: '100vh' }}></div>
      </div>
      <MapList />
      {/* search box & 지도 이름 */}
      <div className="map_top">
        <strong className="map_title">01번 지도입니다.{}</strong>
        <div className="search_box">
          <input type="search" />
          <button type="button">search</button>
        </div>
      </div>

      {/* 모달 */}
      {/* 최초 리스트 이름 생성 모달 */}
      {initialModal && (
        <ModalPortal>
          <Initial setInitialModal={setInitialModal} />
        </ModalPortal>
      )}

      {/* 메모상세 등록 팝업 */}
      {memoAddModal && (
        <ModalPortal setMemoAddModal={setMemoAddModal}>
          <MapListAdd addrInMap={addrInMap} />
        </ModalPortal>
      )}
      {/* 메모상세 팝업
      { && (
        <ModalPortal closePortal={handleClose}>
          <MapListEnter />
        </ModalPortal>
      )} */}
      {/* {<MapTargetList />} */}
    </div>
  );
};

export default MapMain;
