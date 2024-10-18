import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import UnistBody from "$lib/components/unist-body/unist-body.svelte";

describe("UnistBody", () => {
  it("works", () => {
    render(UnistBody, {});
  });
});
