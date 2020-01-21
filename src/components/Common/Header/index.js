import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import btn_menu from '../../../assets/image/btn_menu.svg';

function Header() {
  const [menu, setMenu] = useState(false);

  const onMenuBtnOpen = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h1>
          <Link to="/">LOGO</Link>
        </h1>
      </div>
      <div className="header-nav">
        <button
          type="button"
          className="header-nav-btn"
          onClick={onMenuBtnOpen}
        >
          <img src={btn_menu} alt="메뉴버튼" />
        </button>
        <ul className={menu ? 'open' : ''}>
          <li>
            <Link to="/register">진료예약</Link>
          </li>
          <li>
            <Link to="/register-list">예약확인</Link>
          </li>
          <li>
            <Link to="/join" className="none">
              로그인
            </Link>
          </li>
        </ul>
      </div>
      {/* <Link to="/">메인</Link>
      <Link to="/join">가입</Link>
      <Link to="/setting">설정</Link>
      <Link to="/register">진료예약</Link>
      <Link to="/register-list">리스트</Link> */}
    </div>
  );
}

export default Header;
