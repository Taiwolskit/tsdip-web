import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import styles from './CreateStudioAction.module.scss';

const Action = () => (
  <div>
    <button
      type='button'
      title='編輯'
      data-toggle='tooltip'
      className={`${styles['studio-create-action-btn']} btn btn-info`}>
      <FontAwesomeIcon icon={faEdit} />
    </button>
    <button
      type='button'
      title='邀請管理員'
      data-toggle='tooltip'
      className={`${styles['studio-create-action-btn']} btn btn-light`}>
      <FontAwesomeIcon icon={faPaperPlane} />
    </button>
    <button
      type='button'
      title='刪除'
      data-toggle='tooltip'
      className={`${styles['studio-create-action-btn']} btn btn-danger`}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  </div>
);

export default Action;
