// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IReadonlyTheme } from '@microsoft/sp-component-base';
import { IMyDayEmailWebPartProps } from "../MyDayEmailWebPart";
import { MSGraphClientV3 } from "@microsoft/sp-http";
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IMyDayEmailProps extends IMyDayEmailWebPartProps {
  displayMode: DisplayMode;
  graphClient: MSGraphClientV3;  
  themeVariant: IReadonlyTheme | undefined;
  updateProperty: (value: string) => void;
}
