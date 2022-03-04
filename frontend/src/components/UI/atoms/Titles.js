import { useDispatch, useSelector } from 'react-redux';

const Titles = () => {
  const dispatch = useDispatch();
  const setTitles = useSelector((state) => state.setTitles);

  return <>{<strong className={`title_${setTitles.titleSize}`}>{setTitles.titleText}</strong>}</>;
};

export default Titles;
