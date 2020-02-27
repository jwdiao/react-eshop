import React, { useState } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import $style from './index.module.scss';

function Panel({ children, title, subtitle, more, bgtype = 'white', link = '', tabs }) {
  let [page, setPage] = useState(0);

  let tabNodes = null;
  if (!_.isEmpty(tabs)) {
    tabNodes = tabs.map((t, index) => (
      <a
        key={t.title}
        className={classnames($style.tab, page == index ? $style.tab_active : '')}
        onClick={() => {
          setPage(index);
          t.callback(index);
        }}
      >
        {t.title}
      </a>
    ));
  }

  return (
    <div className={classnames($style.panel, bgtype == 'white' ? $style.panel_white : $style.panel_gold)}>
      <div className={classnames($style.content, 'container')}>
        <div className={$style.header}>
          <div className={$style.header__left}>
            <a className={$style.title}>{title}</a>
            {subtitle && <div className={$style.subtitle}>{subtitle}</div>}
            <div className={$style.tabs}>{tabNodes}</div>
          </div>
          <div className={$style.header__right}>
            <a className={$style.more}>{more} ></a>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Panel;
