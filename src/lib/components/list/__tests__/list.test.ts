import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import List from "$lib/components/list/list.svelte";

describe("List", () => {
  it("works", () => {
    render(List, {});
  });
});
