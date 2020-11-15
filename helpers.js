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
