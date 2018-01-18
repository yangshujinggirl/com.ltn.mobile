import React from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';

const Item = List.Item;

const LCTProjectDetail = ({ data }) => (
  <div className="project-detail-content">
    <List>
      <Item>
        <div>项目描述</div>
        <div className="pro-desc">{data.productTitle}</div>
      </Item>

      <Item>
        <div>借款用途</div>
        <div className="pro-desc">{data.productTag}</div>
      </Item>
      <Item>
        <div>项目协议</div>
        <div className="pro-desc">
          <Link to="/protocol/1">《借款协议》</Link>
        </div>
      </Item>
      <Item>
        <div>保障方式</div>
        <div className="pro-desc">
          <Link to="/static/safe">《平台安全保障详解》</Link>
        </div>
      </Item>
      <Item>
        <div>投资期限</div>
        <div className="pro-desc">{data.productDeadline}天</div>
      </Item>
      <Item>
        <div>加入条件</div>
        <div className="pro-desc">加入金额{data.staInvestAmount}元起。</div>
      </Item>
      <Item>
        <div>到账时间</div>
        <div className="pro-desc">{data.accountDate}</div>
      </Item>
      <Item>
        <div>房屋信息</div>
        <div className="pro-desc">
          <div>
            市场价值：{data.marketValue}
          </div>
          <div>
            产权性质：{data.rightProperty}
          </div>
          <div>
            建筑面积：{data.coveredArea}
          </div>
        </div>
      </Item>
    </List>
  </div>
);

export default LCTProjectDetail;
