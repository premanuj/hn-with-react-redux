import { REQUEST, SUCCESS, FAILURE } from "../constant";

const buildActionCreator = type => {
  return (payload = {}) => ({
    type,
    payload
  });
};

const buildRequestActionType = (type, namespace) => ({
  [`${type}${REQUEST}`]: `${namespace}/${type}${REQUEST}`,
  [`${type}${SUCCESS}`]: `${namespace}/${type}${SUCCESS}`,
  [`${type}${FAILURE}`]: `${namespace}/${type}${FAILURE}`
});

const buildEventActionCreator = type => {
  return (name, data = {}) => ({
    type,
    payload: {},
    event: {
      name,
      data
    }
  });
};

const mapTypeToRequest = type => ({
  request: buildActionCreator(`${type}${REQUEST}`),
  success: buildActionCreator(`${type}${SUCCESS}`),
  failure: buildActionCreator(`${type}${FAILURE}`)
});

const buildRequestCreator = (type, requestCallback) => {
  const request = mapTypeToRequest(type);
  return (payload = {}) => dispatch =>
    requestCallback({ request, payload, dispatch });
};

export {
  buildActionCreator,
  buildRequestActionType,
  buildEventActionCreator,
  buildRequestCreator
};
