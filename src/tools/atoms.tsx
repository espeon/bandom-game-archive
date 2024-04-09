import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const headerHiddenAtom = atomWithStorage("isHeaderHidden", false);
