import Action from './Action';
import styles from './CreateStudio.module.scss';

const App = () => (
  <div id='manage-studio-create' className={styles['manage-studio-create']}>
    <div className={styles['studio-create-action-group']}>
      <button
        type='button'
        className='btn btn-primary'
        title='建立'
        data-toggle='tooltip'>
        Create
      </button>
    </div>

    <table className='table table-hover'>
      <thead className='thead-dark'>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Mark</td>
          <td>
            <Action />
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Jacob</td>
          <td>
            <Action />
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Larry</td>
          <td>
            <Action />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default App;
