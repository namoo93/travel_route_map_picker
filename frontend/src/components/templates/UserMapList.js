import React from 'react';

const UserMapList = () => {
  // 버튼 누르면 setShowMap(true) 맵메인 보이게
  const onClickMapCreate = () => {};
  return (
    <div className="user_map_list">
      <h3>{}님의 리스트</h3>
      <div className="userlist_tab">
        <ul className="userlist_tab_nav">
          <li>저장된장소</li>
          <li>추천경로 리스트</li>
        </ul>
        <div className="userlist_tab_list">
          {/* 저장된장소 */}
          <ul>
            {/* 
			// 리스트 클릭시 맵 페이지로
			{user.mapList.map((cur, idx) => (
				<li key={`${idx}_${new Date().toString()}`}>{cur}</li>
			))}
			*/}
          </ul>
          {/* 저장된 리스트가 하나도 없을시 버튼 보이게 */}
          <button type="button" onClick={onClickMapCreate}>
            장소 추가하기
          </button>
        </div>
        <div className="userlist_tab_list">
          {/* 추천경로 리스트 */}
          <ul>{}</ul>
        </div>
      </div>
    </div>
  );
};

export default UserMapList;
