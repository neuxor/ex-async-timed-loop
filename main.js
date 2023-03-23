(async () => {
  let loop = 0;
  let timer;

  const nextLoopTime = 2000;

  const func1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(console.log("run func1")), 2000);
    });
  };

  const func2 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(console.log("run func2")), 1500);
    });
  };

  const func3 = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(console.log("run func3")), 1000);
    });
  };

  const next = () => {
    timer = setTimeout(init, nextLoopTime);
    loop++;
  };

  const init = async () => {
    console.log("Start Loop : " + loop);
    console.log("--------------------");
    await func1();
    await func2();
    await func3();
    console.log("--------------------");
    console.log("End Loop : " + loop);
    console.log("#####################");
    next();
  };

  init();
})();
