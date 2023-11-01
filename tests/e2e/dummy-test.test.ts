import { sleep } from "../../src/sleep";

describe("Dummy e2e test", () => {
  it("One should be One", async () => {
    await sleep(4000);
    expect(1).toBe(1);
  });
});
