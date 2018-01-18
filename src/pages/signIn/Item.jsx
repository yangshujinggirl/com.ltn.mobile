import React from 'react';
import lodash from 'lodash';
import { Motion, spring } from 'react-motion';
import { Toast } from 'antd-mobile';

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

class Item extends React.Component {


  getLwObj(sumDays) {
    const resArray = lodash.filter(this.props.rewardDistributions, lwObj => lwObj.cumulativeDays === sumDays);
    return resArray[0];
  }

  getItemClsss(day) {
    const date = this.props.currentMoment.get('date');// 获取当前天
    const classArray = ['day-item'];
    if (day < date) {
      // 判断是否签到
      if (lodash.includes(this.props.signDates, day)) {
        classArray.push('sigin');
        // 当前日期已经签到
      }
    } else if (day === date) {
      if (this.props.currentSigin) {
        classArray.push('sigin');
      } else if (this.props.showAni) {
        classArray.push('sigingift');
      }
    } else {
      const duibiDate = this.props.currentSigin ? date : (date - 1);
      // 当前已经签到
      if (lodash.includes(this.props.lwDays, (day - duibiDate))) {
        classArray.push('liwu');
      }
    }
    return classArray;
  }

  // 点击礼物，显示礼物提示框
  showLwDes(day, signLength, classArray) {
    if (lodash.includes(classArray, 'liwu')) {
      //  ** 下面的代码别删除，房子需求变更 ***//
      // const date = this.props.currentMoment.get('date');// 获取当前天
      // let liwuObj;
      // if (signLength) {
      //   liwuObj = this.getLwObj((day - date) + signLength);
      // } else {
      //   liwuObj = this.getLwObj(day);
      // }
      // Toast.info(liwuObj.rewardDesc);
      Toast.info('保持连续签到，就能在当天获得一份小礼物。');
    }
  }

  initDay(dayObj) {
    const { day } = dayObj;
    const classArray = this.getItemClsss(day);
    const classStr = lodash.join(classArray, ' ');
    if (day) {
      if (this.props.month === this.props.queryMonth) {
        return (<div
          className={classStr}
          key={lodash.uniqueId('day-item')}
          onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, classArray)}
        >{day}</div>);
      }
      return <div className="day-item" key={lodash.uniqueId('day-item')}>{day}</div>;
    }
    return <div className="day-item" key={lodash.uniqueId('day-item')} />;
  }

  showItem(dayObj) {
    const date = this.props.currentMoment.get('date');// 获取当前天
    const day = dayObj.day;
    // 判断是否显示（排除0的数据）
    if (day) {
      if (day < date) {
        if (lodash.includes(this.props.signDates, day)) {
          // 当前日期已经签到
          return <div className="day-item sigin" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
        }
        return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
      } else if (day >= date) {
        if (this.props.currentSigin) {
          // 当前已经签到
          if (lodash.includes(this.props.lwDays, (dayObj.day - date))) {
            return (
              <div
                className="day-item liwu"
                onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, date)}
                key={lodash.uniqueId('day-item')}
              >
                {dayObj.day}
              </div>
            );
          }
          return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
        }
        // 当天未签到
        if (lodash.includes(this.props.lwDays, ((dayObj.day + 1) - date))) {
          // 表示接口完成签到
          if (this.props.showAni && dayObj.day === date) {
            return (
              <div
                className="day-item sigingift"
                onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, date)}
                key={lodash.uniqueId('day-item')}
              >
                {dayObj.day}
              </div>
            );
          }
          return (
            <div
              className="day-item liwu"
              onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, date)}
              key={lodash.uniqueId('day-item')}
            >
              {dayObj.day}
            </div>
          );
        }
        return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
      }
    }
    return <div className="day-item" key={lodash.uniqueId('day-item')} />;
  }

  showJifen() {
    return (<Motion
      defaultStyle={{ top: 110, opacity: 10 }} style={{
        top: spring(40, {
          stiffness: 100,
          damping: 10
        }),
        opacity: spring(0, {
          stiffness: 10,
          damping: 6
        })

      }}
    >
      {interpolatingStyle => <div className="jifen-wrap" style={interpolatingStyle}>+<span>2</span>积分</div>}
    </Motion>);
  }

  render() {
    const { calendarDesc } = this.props;
    let { month } = this.props;
    month += 1;
    return (
      <div
        className="month-date-wrap"
      >
        <div className="title">
          <p>
            <span className="num">{month > 9 ? month : `0${month}`}</span>
            <span className="en">{MapMonth[month - 1]}</span>
          </p>
          <p className="des">{calendarDesc}</p>
        </div>
        <div className="day-items cf">
          {
            this.props.monthArray.map(dayObj => this.initDay(dayObj))
          }
        </div>
        {
           this.props.showAni && this.showJifen()
        }
      </div>
    );
  }
}

export default Item;
