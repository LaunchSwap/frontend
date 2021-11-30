import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'QANON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC318039f54aec0BEADfBfF23CfcAdd434ab635D4',
    },
    tokenSymbol: 'Qanon2024',
    tokenAddresses: {
      97: '',
      56: '0x529cde35fD287164418CB094512aD7386985a190',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'QANON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2F0dfD2d8155E3630Aa05552f682c8FB6Eb278E0',
    },
    tokenSymbol: 'Qanon2024',
    tokenAddresses: {
      97: '',
      56: '0x529cde35fD287164418CB094512aD7386985a190',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x91ADD48A218168b438210a7Bc9430a5395E308CE',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0x529cde35fD287164418CB094512aD7386985a190',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'DARE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x55Ce1215a3893188407A2af148e6b4a5548375e1',
    },
    tokenSymbol: 'DARE',
    tokenAddresses: {
      97: '',
      56: '0x82b57ca0199e74615baae838925aa543fd336334',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'DARE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd2FE9bBA77A1ff83305d41fb854fCA1aF619bc4f',
    },
    tokenSymbol: 'DARE',
    tokenAddresses: {
      97: '',
      56: '0x82b57ca0199e74615baae838925aa543fd336334',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'QANON',
    lpAddresses: {
      97: '',
      56: '0xC318039f54aec0BEADfBfF23CfcAdd434ab635D4', // EGG-BUSD LP
    },
    tokenSymbol: 'QANON',
    tokenAddresses: {
      97: '',
      56: '0x529cde35fD287164418CB094512aD7386985a190',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xC318039f54aec0BEADfBfF23CfcAdd434ab635D4', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x91ADD48A218168b438210a7Bc9430a5395E308CE', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
