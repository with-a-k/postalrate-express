function expandMailType(mailType) {
  switch(mailType) {
    case 'stamped':
      return "stamped letter";
    case 'metered':
      return "metered letter";
    case 'flat':
      return "flat large envelope";
    case 'retail':
      return "first-class retail package";
    default:
      return "invalid mail type";
  }
}

function currencify(amount) {
  amount = String(amount);
  if (!amount.includes('.')) {
    amount.concat('.');
  }
  return amount.padEnd(4, '0');
}

module.exports = {expandMailType, currencify};
