import lodash from 'lodash';
import routesData from './routesData.json5';

const Util = {
  // 更新页面的标题
  updatePageTitle(location) {
    const routeObj = lodash.find(routesData, o => location.pathname.indexOf(o.url) !== -1);
    let pageTitle = '领投鸟理财';
    if (routeObj) {
      pageTitle = routeObj.title;
    } else {
      pageTitle = '领投鸟理财';
    }
    document.title = pageTitle;
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'display: none; width: 0; height: 0;';
    const listener = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', listener);
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 20000);
      }, 0);
    };
    iframe.addEventListener('load', listener);
    document.body.appendChild(iframe);
  },
  // 获取sessionkty
  getSessionKey() {
    if (typeof window.LtnApp === 'undefined') {
      return sessionStorage.getItem('ltn_sessionKey');
    }
    const res = window.LtnApp.getSessionKey();
    return res.sid;
  },
  // 是否登录
  isLogin() {
    if (typeof window.LtnApp === 'undefined') {
      // alert(typeof window.LtnApp)
      return !!sessionStorage.getItem('ltn_sessionKey');
    }
    const res = window.LtnApp.getSessionKey();
      // alert(!!res.sid);
      // Toast.info(res.sid, 5);
    return !!res.sid;
  },
  // 去登录
  goLogin(url) {
    if (typeof window.LtnApp === 'undefined') {
      window.location.href = `/native/user_login/user_login.html?url=${url}`;
    } else {
      window.LtnApp.login({
        url
      });
    }
  },
  // 去投资
  goProductList() {
    if (typeof window.LtnApp === 'undefined') {
      window.location.href = '/native/home/home.html?';
    } else {
      window.LtnApp.gotoAppPage({ type: 'gotoProductList' });
    }
  },
  // 去我的投资
  goMyInvest() {
    if (typeof window.LtnApp === 'undefined') {
      window.location.href = '/native/account_viewall/account_viewall.html';
    } else {
      window.LtnApp.gotoAppPage({ type: 'gotoMyInvestment' });
    }
  },
  // 获取url里面的参数
  getSearchParts(key) {
    const url = decodeURI(window.location.pathname + window.location.search + window.location.hash);
    const arys = url.split('?');
    const paramsd = {};
    for (let i = 0; i < arys.length; i += 1) {
      if (i > 0) {
        const pars = arys[i].split('&');
        for (let j = 0; j < pars.length; j += 1) {
          paramsd[pars[j].split('=')[0]] = pars[j].split('=')[1];
        }
      }
    }
    const value = paramsd[key];
    return value;
  }
};

export default Util;
