import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as React from "react";
import * as ReactDom from "react-dom";
import Listview from "./components/listview/Listview";

export interface IItVodafoneDevicesWebPartProps {}

export default class ItVodafoneDevicesWebPart extends BaseClientSideWebPart<IItVodafoneDevicesWebPartProps> {
  public render(): void {
    const element: React.ReactElement = React.createElement(Listview);

    ReactDom.render(element, this.domElement);
  }

  protected override onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected override get dataVersion(): Version {
    return Version.parse("1.0");
  }
}
