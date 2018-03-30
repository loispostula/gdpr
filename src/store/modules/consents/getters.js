const getConsents = state => state.consents;
const getValidating = (state) => {
  if (!state.validating) return null;
  return state.consents[state.validating];
};
const getValidationMessage = (state) => {
  const validating = getValidating(state);
  if (!validating) return '';
  if (validating.given) {
    return `I hereby withdraw consent prior given for the purpose 
    of ${validating.title} according to the GDPR Article 7(3). 
    Please respond to this request within one month (Sun Apr 29 2018) 
    as ruled by the GDPR Article 12(3).`;
  }
  return `I hereby freely give informed consent to process my personal data for ${validating.title}`;
};

export default {
  getConsents,
  getValidating,
  getValidationMessage,
};
