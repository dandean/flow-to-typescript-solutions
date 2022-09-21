// @flow

import type { ComponentId, VariableId } from "./opaque";

const componentIdOne: ComponentId = "foo";
const variableIdOne: VariableId = "bar";

const componentIdTwo: ComponentId = variableIdOne;
