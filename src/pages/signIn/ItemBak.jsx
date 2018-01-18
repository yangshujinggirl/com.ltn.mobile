import React from 'react';
import Hammer from 'hammerjs';
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
  componentDidMount() {
    const hammertime = new Hammer(this.element, {});
    hammertime.on('swipeleft', () => {
      if (this.props.month < 12) {
        this.props.changeArray(this.props.index + 1, this.props.index);
      }
    });
    hammertime.on('swiperight', () => {
      if (this.props.month > 1) {
        this.props.changeArray(this.props.index - 1, this.props.index);
      }
    });
    hammertime.on('panleft', () => {
      if (this.props.month < 12) {
        this.props.changeArray(this.props.index + 1, this.props.index);
      }
    });
    hammertime.on('panright', () => {
      if (this.props.month > 1) {
        this.props.changeArray(this.props.index - 1, this.props.index);
      }
    });
  }

  getLwObj(sumDays) {
    const resArray = lodash.filter(this.props.rewardDistributions, lwObj => lwObj.cumulativeDays === sumDays);
    return resArray[0];
  }
  // 点击礼物，显示礼物提示框
  showLwDes(day, signLength, date) {
    let liwuObj;
    if (signLength) {
      liwuObj = this.getLwObj((day - date) + signLength);
    } else {
      liwuObj = this.getLwObj(day);
    }
    Toast.info(liwuObj.rewardDesc);
  }

  showItem(dayObj) {
    const month = this.props.currentMoment.get('month');// 获取当前月
    const date = this.props.currentMoment.get('date');// 获取当前天
    const day = dayObj.day;
    // 判断是否显示（排除0的数据）
    if (day) {
      // 非当前查询，只是渲染日历
      if (this.props.queryIndex !== (this.props.month - 1)) {
        return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
      } else if (this.props.queryIndex < month) {
        // 查询的是历史，只需要显示已经签到的ui
        if (lodash.includes(this.props.signDates, day)) {
          return (
            <div className="day-item sigin" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>
          );
        }
        return (
          <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>
        );
      } else if (this.props.queryIndex > month) {
        // 查询的是未来的数据，只需要显示礼包
        if (lodash.includes(this.props.rewardArray, day)) {
          return (
            <div
              className="day-item liwu"
              onClick={() => this.showLwDes(dayObj.day)} key={lodash.uniqueId('day-item')}
            >{dayObj.day}</div>
          );
        }
        return (
          <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>
        );
      }
      // 当前月，先判断签到
      if (lodash.includes(this.props.signDates, day)) {
        return (
          <div className="day-item sigin" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>
        );
      }
      // 判断礼品
      const lwDay = this.props.rewardArray.map((tt) => {
        if (tt - this.props.signDates.length > 0) {
          return tt - this.props.signDates.length;
        }
        return false;
      });
      // 判断当天是否签到
      if (!this.props.currentSigin) {
        // 当前天没有签到
        if (lodash.includes(lwDay, ((dayObj.day + 1) - date))) {
          return (<div
            className="day-item liwu"
            onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, date)}
            key={lodash.uniqueId('day-item')}
          >{dayObj.day}</div>);
        }
        return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
      } else if (this.props.currentSigin && dayObj.day === date) {
        // 当天完成签到
        return <div className="day-item sigingift" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
      }
      if (lodash.includes(lwDay, (dayObj.day - date))) {
        return (<div
          className="day-item liwu"
          onClick={() => this.showLwDes(dayObj.day, this.props.signDates.length, date)}
          key={lodash.uniqueId('day-item')}
        >{dayObj.day}</div>);
      }
      return <div className="day-item" key={lodash.uniqueId('day-item')}>{dayObj.day}</div>;
    }
    return <div className="day-item" key={lodash.uniqueId('day-item')} />;
  }

  showJifen() {
    if ((this.props.month === this.props.currentMoment.get('month') + 1)) {
      return (<Motion
        defaultStyle={{ top: 110, opacity: 10 }} style={{
          top: spring(40, {
            stiffness: 400,
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
    return false;
  }

  render() {
    return (
      <div
        className="item"
        ref={(ele) => { this.element = ele; }}
        style={{
          left: this.props.left,
          boxShadow: `0 ${this.props.boxShadow}px ${this.props.boxShadow}px rgba(0,0,0,0.16)`,
          top: this.props.top,
          height: `${this.props.height / 100}rem` }}
      >
        <div className="title">
          <p>
            <span className="num">{this.props.month > 9 ? this.props.month : `0${this.props.month}`}</span>
            <span className="en">{MapMonth[this.props.index]}</span>
          </p>
          <p className="des">{this.props.calendarDesc}</p>
        </div>
        <div className="day-items cf">
          {
            this.props.monthArray.map((dayObj, i) => this.showItem(dayObj, i))
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
