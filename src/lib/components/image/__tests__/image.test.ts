import { render } from "@testing-library/svelte";
import { describe, it } from "vitest";

import Image from "$lib/components/image/image.svelte";

describe("Image", () => {
  it("works", () => {
    render(Image, { props: { data: {} } });
  });
});
