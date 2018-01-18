// 数据服务
import Ajax from '../../api/axiosinstance';
import BaseUrl from '../../common/baseUrl';

const ajax = new Ajax({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});


export function signHistory(month) {
  return ajax.get('/sign/homepage/signHistory', {
    params: {
      month
    }
  });
}
// 签到
export function sign() {
  return ajax.get('/sign/homepage/submit');
}
// 查询历史 签到获奖数据
export function getHistoryReward(year) {
  return ajax.get('/sign/homepage/getHistoryReward', {
    params: {
      year
    }
  });
}
