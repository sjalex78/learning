import { expect, it } from "vitest";

import { JS_Function_Name } from "./index.js";

it("description of the test", () => {
  const result = JS_Function_Name();

  expect(result).toBe("expected output of the JS_Function_Name");
});
