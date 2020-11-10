module.exports = async function (
  fnAsyncTask,
  fnValidate,
  msInterval,
  msTimeout
) {
  let result = await fnAsyncTask();

  let totalTime = 0;
  while (!fnValidate(result)) {
    if (totalTime > msTimeout) return null;
    await wait(msInterval);
    result = await fnAsyncTask();
    totalTime += msInterval;
  }
  return result;
};

const wait = function (msInterval) {
  return new Promise((resolve) => {
    setTimeout(resolve, msInterval);
  });
};
