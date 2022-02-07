const UserMapList = () => {
	return (
		<div className="user_map_list">
			<div className="button_box ">
				<strong>{user.nickname}</strong>
				<button className="buttons button_right">+</button>
			</div>
			<ul>
				{user.mapList.map((cur) => (
					<li></li>
				))}
			</ul>
		</div>
	);
};

export default UserMapList;
