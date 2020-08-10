import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { ContextStore } from '../../ctx';
import { i18n, withTranslation } from '../../i18n';


const Header = ({ t }) => {
  const { accessToken, dispatch } =  useContext(ContextStore);

  return  (
    <div>
      <Button variant='contained' color='primary'>
        Hello Next.js
        {t('description')}
      </Button>
      <Button variant='contained' color='primary' onClick={() => dispatch({type: 'LOGIN', accessToken: true })}>Login {JSON.stringify(accessToken)}</Button>
      <button
        type='button'
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'zh-TW' : 'en')
        }>
        {t('change-locale')}
      </button>
    </div>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Header);
