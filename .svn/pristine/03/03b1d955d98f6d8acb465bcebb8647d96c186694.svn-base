// 认证绑定 帮助
import React from 'react';
import { Carousel, WingBlank, Flex } from 'antd-mobile';


import safeEnsureImg1 from './imgs/insurance-pic1.png';
import safeEnsureImg2 from './imgs/insurance-pic2.png';
import safeEnsureImg3 from './imgs/insurance-pic3.png';
import safeEnsureImg4 from './imgs/insurance-pic4.png';
import safeEnsureImg5 from './imgs/insurance-pic5.png';

const SafeEnsurePage = () => {
  const d = document;
  const documentElement = document.documentElement;
  const body = d.getElementsByTagName('body')[0];
  const style = {
    textAlign: 'center',
    width: '100%',
    height: window.innerHeight || documentElement.clientHeight || body.clientHeight
  };
  const carouselData = [
    {
      id: '1',
      src: safeEnsureImg1,
      title: '安全保障',
      style: {
        textAlign: 'center'
      },
      text: '领投鸟--专注互联网房产金融</br>因为专注，所以专业'
    },
    {
      id: '2',
      src: safeEnsureImg2,
      title: '资金安全',
      text: '资金由第三方支付机构联动优势中国移动和中国银联联合成立联合银行存管， 平台不触碰资金。'
    },
    {
      id: '3',
      src: safeEnsureImg3,
      title: '业务安全',
      text: '资金主要用于借款人房产交易过程中产生的短期资金周转，房屋标的信息真实可查。 通过账户托管，资金直接流向借款人账户，线下跟进保证专款专用。'
    },
    {
      id: '4',
      src: safeEnsureImg4,
      title: '风险控制',
      text: '百人专业风控团队，全面审核房屋产权房屋市值评估、房产交易合同、银行批贷函、借款人征信和还款能力。 借款金额不高于房屋评估价40%。'
    },
    {
      id: '5',
      src: safeEnsureImg5,
      title: '公开透明',
      text: '平台录入全部房产交易真实信息，每月发布运营报告，披露细节。</br>定期邀请投资用户线下考察集团经营情况和房产真实交易情况。'
    }
  ];
  const createMarkup = text => ({ __html: text });
  return (
    <div className="animated fadeInRight">
      <WingBlank>
        <Carousel className="faq-safeensure-warp" vertical dots={false}>
          {
            carouselData.map(x => (
              <div className="carousel-panel" style={style} key={x.id}>
                <Flex justify="center" align="center" alignContent="center" style={style}>
                  <Flex.Item>
                    <img src={x.src} alt={x.text} className="pics" />
                    <h4>{x.title}</h4>
                    <p dangerouslySetInnerHTML={createMarkup(x.text)} style={x.style} />
                  </Flex.Item>
                </Flex>
              </div>
            ))
          }
        </Carousel>
      </WingBlank>
    </div>
  );
};


export default SafeEnsurePage;
