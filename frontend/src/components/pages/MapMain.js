import React, { useEffect, useRef, useState } from 'react';
import MapList from '../templates/MapList';
import MapListAdd from '../templates/MapListAdd';
import MapListEnter from '../templates/MapListEnter';
import MapTargetList from '../templates/MapTargetList';
import ModalPortal from '../templates/ModalPortal'; //팝업
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
  image: new window.kakao.maps.MarkerImage('/img/marker.png', new window.kakao.maps.Size(8, 8)),
};

const MapMain = (userMapList, setUserMapList) => {
  //모달
  const [initialModal, setInitialModal] = useState(true);
  const [memoAddModal, setMemoAddModal] = useState(false);
  const [memoContents, setMemoContents] = useState([`&nbsp;`]);
  //카카오 지도
  const [placeInfoList, setPlaceInfoList] = useState([]); //장소 데이터
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  //인포컨텐츠 내용물
  const customInfoContent = `<div class="info_contents">${memoContents[0]}</div>`;

  useEffect(() => {
    //카카오 API 지도 객체
    const maps = new window.kakao.maps.Map(container.current, mapOptions);
    // 주소-좌표 변환 객체
    const geocoder = new window.kakao.maps.services.Geocoder();
    //마커 객체
    const marker = new window.kakao.maps.Marker(markerOptions);
    // 썸네일 인포 객체
    const customInfo = new window.kakao.maps.CustomOverlay({ map: maps, content: customInfoContent });
    // 장소 정보 객체
    const placeInfo = new window.kakao.maps.services.Places();

    const infoCallback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        //결과 장소의 데이터 담기
        console.log(result);
        return setPlaceInfoList(result);
      } else {
        console.log(result);
      }
    };

    // 좌표로 법정동 상세 주소 정보를 요청합니다
    function searchDetailAddrFromCoords(coords, coordsCallback) {
      geocoder.coord2Address(coords.getLng(), coords.getLat(), coordsCallback);
    }

    //지도 클릭시 마커띄우기
    window.kakao.maps.event.addListener(maps, 'click', function (e) {
      //메모 상세 팝업
      setMemoAddModal(true);

      searchDetailAddrFromCoords(e.latLng, function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          //주소값으로 해당 장소의 데이터 불러오기
          // let detailAddr = !!result[0].road_address ? `도로명 주소: ${result[0].road_address.address_name}` : '';

          //지도의 위치값에 정보를 불러옴
          placeInfo.keywordSearch(result[0].address.address_name, infoCallback);

          //마커위의 인포윈도우
          customInfo.setPosition(e.latLng);
          // 마커를 클릭한 위치에 표시합니다
          marker.setPosition(e.latLng);
          marker.setMap(maps);
        }
      });
    });

    // 마커 이벤트
    window.kakao.maps.event.addListener(marker, 'mouseover', function () {});
    window.kakao.maps.event.addListener(marker, 'mouseout', function () {});
    window.kakao.maps.event.addListener(marker, 'click', function () {});

    return maps;
  }, [placeInfoList]);

  return (
    <div className="map_main" id="root_modal">
      <div className="map_kakao">
        <div ref={container} className="map" style={{ width: '100vw', height: '100vh' }}></div>
      </div>
      <MapList />
      {/* search box & 지도 이름 */}
      <div className="map_top">
        {/* <strong className="map_title">{userMapList}</strong> */}
        <div className="search_box">
          <input type="search" className="search_bar" />
          <button type="button" className="buttons">
            search
          </button>
        </div>
      </div>

      {/* 모달 */}
      {/* 최초 리스트 이름 생성 모달 */}
      {initialModal && (
        <ModalPortal>
          <Initial setInitialModal={setInitialModal} setUserMapList={setUserMapList} />
        </ModalPortal>
      )}

      {/* 메모상세 등록 팝업 */}
      {memoAddModal && (
        <ModalPortal setMemoAddModal={setMemoAddModal}>
          <MapListAdd
            placeInfoList={placeInfoList}
            setPlaceInfoList={setPlaceInfoList}
            setMemoAddModal={setMemoAddModal}
            setMemoContents={setMemoContents}
          />
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
