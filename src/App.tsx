import { Browse, List, Result } from './components';

import style from './styles/app.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.app__browse}>
        <Browse />
      </div>
      <div className={style.app__list_result}>
        <List />
        <Result />
      </div>
    </div>
  );
};

export default App;
