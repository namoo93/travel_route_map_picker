import {useSelector} from 'react-redux';

const Titles = () => {
	const setTitles = useSelector((state) => state.setTitles);

	return <>{<strong className={`title_${setTitles.titleSize}`}>{setTitles.titleText}</strong>}</>;
};

export default Titles;
