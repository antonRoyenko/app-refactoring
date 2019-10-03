export default function createAction(type) {
  return function actionCreator(payload) {
    return {
      type,
      payload,
    };
  };
}
