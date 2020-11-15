function handlePostRate(request, response) {
  const mailType = request.query.itemType;
  const mailWeight = Number(request.query.weight.toInt);

  console.log(mailType, mailWeight);

  getRate(response, mailType, mailWeight);
}

function getRate(response, type, weight) {
  type = type.toLowerCase();
  let result = 0.0;
  let message = '';

  switch(type) {
    case 'stamped':
      if (weight < 1) {
        result = 0.55;
      } else if (weight < 2) {
        result = 0.70;
      } else if (weight < 3) {
        result = 0.85;
      } else if (weight < 3.5) {
        result = 1.00;
      } else {
        result = 0;
      }
      break;
    case 'metered':
      if (weight < 1) {
        result = 0.55;
      } else if (weight < 2) {
        result = 0.65;
      } else if (weight < 3) {
        result = 0.80;
      } else if (weight < 3.5) {
        result = 0.95;
      } else {
        result = 0;
      }
      break;
    case 'flat':
      if (weight > 13) {
        result = 0;
      } else {
        result = 1.00 + (0.2 * Math.floor(weight));
      }
      break;
    case 'retail':
      if (weight < 4) {
        result = 3.80;
      } else if (weight < 8) {
        result = 4.60;
      } else if (weight < 12) {
        result = 5.30;
      } else if (weight < 13) {
        result = 5.90;
      } else {
        result = 0;
      }
      break;
    case 'default':
      result = -1;
      break;
  }

  if (result == 0) {
    message = "Your mail is too heavy to get the rate for."
  } else if (result == -1) {
    message = "Your mail type was not valid."
  }

  const params = {type: type, weight: weight, result: result, message: message};

  response.render('pages/result', params);
}

module.exports = { handlePostRate };
