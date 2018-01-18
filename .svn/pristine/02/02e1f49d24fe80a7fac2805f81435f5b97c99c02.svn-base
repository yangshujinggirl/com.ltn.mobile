import React from 'react';
import wenhao from './imgs/wenhao.png';
import td from './imgs/td.png';

const showExplainWindow = () => {
  window.LtnApp.showExplainWindow({ type: 'LiCaiQuan' });
};

const showExplainWindow2 = () => {
  window.LtnApp.showExplainWindow({ type: 'transforProduct' });
};
const gotoWebPage = () => {
  window.LtnApp.gotoWebPage({ url: 'http://www.baidu.com' });
};

const DetailTemplate = () => (
  <div className="finance-project-detail">
    <h3 className="title">这是图文组合的样式</h3>
    <div className="content">
      <div className="img-text-wrap clearfix">
        <div className="img-text-item">
          <img src={td} alt="td" />
          <span>加入智投</span>
        </div>
        <div className="img-text-item">
          <img src={td} alt="td" />
          <span>加入智投</span>
        </div>
        <div className="img-text-item">
          <img src={td} alt="td" />
          <span>加入智投</span>
        </div>
        <div className="img-text-item">
          <img src={td} alt="td" />
          <span>加入智投</span>
        </div>
        <div className="img-text-item">
          <img src={td} alt="td" />
          <span>加入智投</span>
        </div>
      </div>
    </div>
    <h3 className="title">这是标题</h3>
    <div className="content">
      <p>这是内容，最简单的文本内容</p>
    </div>
    <h3 className="title">这是带问号内容的，问号可以点击</h3>
    <div className="content">
      <p className="has-icon">这是内容，最简单的文本内容 <img src={wenhao} alt="wenhao" onClick={showExplainWindow} /></p>
      <p className="has-icon">这是内容，最简单的文本内容 <img src={wenhao} alt="wenhao" onClick={showExplainWindow2} /></p>
    </div>
    <h3 className="title">这是一个连接</h3>
    <div className="content">
      <p><a href="-1" onClick={gotoWebPage}>《平台安全保障详解》</a></p>
    </div>
    <h3 className="title">这是一个表格排列</h3>
    <div className="content">
      <span className="item"> <i className="name">市场价值:</i><i className="value">1.000</i></span>
      <span className="item"> <i className="name">市场价值:</i><i className="value">1.000</i></span>
      <span className="item"> <i className="name">市场价值:</i><i className="value">1.000</i></span>
      <span className="item"> <i className="name">市场价值:</i><i className="value">1.000</i></span>
      <span className="item"> <i className="name">市场价值:</i><i className="value">1.000</i></span>
    </div>
  </div>
);

export default DetailTemplate;
