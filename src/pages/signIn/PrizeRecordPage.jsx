// 获奖记录
import React from 'react';
import moment from 'moment';
import lodash from 'lodash';
import { Toast } from 'antd-mobile';
import {
  loginExpired
} from '../../common/scripts/util';
import NoDataPage from '../../common/components/noData/NoDataPage';// 暂无数据
import { getHistoryReward } from './SignInService';
import './PrizeRecordPage.scss';
import arrowJpg from './img/heijiantou.png';


const MapMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

class PrizeRecordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthArry: [],
      signObjByMonth: {}
    };
  }


  componentDidMount() {
    this.getData();
  }


  getData() {
    getHistoryReward(moment().get('year'))
    .then(({ signHistoryRewardInfos }) => {
      const signObjByMonth = lodash.groupBy(signHistoryRewardInfos, obj => moment(obj.signDate).get('month'));
      const monthArry = lodash.keys(signObjByMonth).reverse();
      this.setState({
        signObjByMonth,
        monthArry
      });
    }, (err) => {
      const { resultCode } = err.data;
      if (resultCode === '10000006' || resultCode === '10000005') {
        loginExpired(window.location.href);
      } else {
        Toast.fail(err.message);
      }
    });
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="prize-record-list">
        <div className="header-nav">
          <img src={arrowJpg} alt="arrow" onClick={() => this.goBack()} className="icon-arrow" />
          <p className="nav-titile">获奖记录</p>
        </div>
        {
          this.state.monthArry.length > 0 ?
            <div>
              <h4>奖品详情</h4>
              {
                this.state.monthArry.map(month => (
                  <div className="month-wrap" key={lodash.uniqueId(month)}>
                    <p className="month-name">
                      <span className="en">{MapMonth[month]}</span>
                      <span className="num">
                        {
                          (parseInt(month, 10) + 1) > 10 ?
                          (parseInt(month, 10) + 1) :
                          `0${parseInt(month, 10) + 1}`
                        }
                      </span>
                    </p>
                    <div className="sigin-item">
                      {
                          this.state.signObjByMonth[month].map(re => (
                            <p key={lodash.uniqueId('day')}>
                              <span>{re.rewardName || '--'}</span>
                              <span>{moment(re.signDate).format('YYYY-MM-DD')}</span>
                            </p>
                            ))
                        }
                    </div>
                  </div>
                  ))
              }
            </div>
          :
            <NoDataPage />
        }
      </div>
    );
  }
}


export default PrizeRecordPage;
