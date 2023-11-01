import { sleep } from "../../src/sleep";

describe("Dummy unit test", () => {
  it("One should be One", async () => {
    await sleep(4000);
    expect(1).toBe(1);
  });
});
