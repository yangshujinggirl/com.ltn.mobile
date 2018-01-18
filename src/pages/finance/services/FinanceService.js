/* eslint no-mixed-operators: 0 */
import HttpService from './HttpService';

const FinanceService = {

  /**
   * [ 查询标的详情 ]
   */
  getProductDetail(id) {
    const data = {
      url: '/productDetail',
      params: {
        id
      }
    };
    return HttpService.get(data);
  },
  getPurchasehistory(currentPage, pageSize, productId) {
    const data = {
      url: '/product/purchasehistory',
      params: {
        currentPage,
        pageSize,
        productId
      }
    };
    return HttpService.get(data);
  },
  /**
   * [ 将类似 3.3%+0.3%  转为 [3.3,0.3] ]
   */
  analysisAnnualIncomeText(annualIncomeText) {
    if (!annualIncomeText || typeof annualIncomeText !== 'string') {
      return annualIncomeText;
    }
    const newStr = annualIncomeText.replace(/%/g, ',%').replace(/\+/g, ',+,');
    return newStr.split(',');
  },
  /**
   * [ 项目剩余金额 格式转换  超过万，以万为单位， 低于万 用千为单位 ]
   */
  analysisProductRemainAmount(productRemainAmount) {
    const array = [];
    const tempProductRemainAmount = parseFloat(productRemainAmount);
    if (tempProductRemainAmount >= 99999.4) {
      const tem = tempProductRemainAmount / 10000;
      array.push(parseFloat(tem.toFixed(2)));
      array.push('万');
    } else {
      array.push(parseFloat(tempProductRemainAmount.toFixed(0)));
      array.push('元');
    }
    return array;
  },
  /**
   * [ 项目进度  通过总金额和剩余金额计算出来 ]
   */
  getProgress(productTotalAmount, productRemainAmount) {
    const progress = (productTotalAmount - productRemainAmount) / productTotalAmount * 100;
    return parseInt(progress, 10);
  },
  /**
   * [ 标的的 标签 ]
   */
  getTag(productTag, isAssignment, productType, isContainsCoupon, activityTags) {
    let tags = [];
    if (productType === 'XSB') {
      tags.push('仅可购买一个新手项目');
    } else {
      if (productTag) {
        tags = productTag.split(';');
      }
      if (productType === 'TYB') {
        tags.push('体验金券购买');
      } else {
        if (isAssignment === 1) {
          tags.push('可转让');
        }
        if (isContainsCoupon) {
          if (isContainsCoupon === 'BHJXQ') {
            tags.push('包含加息券');
          } else if (isContainsCoupon === 'BHFXQ') {
            tags.push('包含返现券');
          }
        }
      }
    }
    if (activityTags) {
      const actTags = activityTags.split(',');
      tags = tags.concat(actTags);
    }
    return tags;
  }
};

export default FinanceService;
