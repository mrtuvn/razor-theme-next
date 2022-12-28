function wait(time: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

type Misc = {};

export default Misc;
