// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IMyCalendarWebPartProps } from "../MyCalendarWebPart";
import { DisplayMode } from "@microsoft/sp-core-library";
import { MSGraphClientV3 } from "@microsoft/sp-http";

export interface IMyCalendarProps extends IMyCalendarWebPartProps {
  displayMode: DisplayMode;
  graphClient: MSGraphClientV3;
  updateProperty: (value: string) => void;
}
