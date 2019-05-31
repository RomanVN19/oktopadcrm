import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const wholeDay = date => ({
  $gte: moment(date).startOf('day').format(),
  $lte: moment(date).endOf('day').format(),
});
