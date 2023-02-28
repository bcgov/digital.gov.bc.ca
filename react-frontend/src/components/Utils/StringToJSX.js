import { Collapse } from "antd";
import React from "react";
import { CollapseStyled, PanelStyled } from "../StyleComponents/collapseMenu";
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';
import { StyleRichText } from "../StyleComponents/styledMarkdown";

let getNodes = function (str) {
  return new DOMParser().parseFromString(str, "text/html").body.childNodes;
}

let createJSX = nodeArray => {
  return nodeArray.map((node) => {
    let attributeObj = {};
    const {
      attributes,
      localName,
      childNodes,
      nodeValue
    } = node;
    if (localName === "h1") {
      document.title = node.innerText + " - Digital Government - Province of British Columbia";
    }
    if (attributes) {
      Array.from(attributes).forEach(attribute => {
        if (attribute.name === "style") {
          let styleAttributes = attribute.nodeValue.split(";");
          let styleObj = {};
          styleAttributes.forEach(attribute => {
            let [key, value] = attribute.split(":");
            styleObj[key] = value;
          });
          attributeObj[attribute.name] = styleObj;
        } else if (attribute.name === "class") {
          attributeObj["className"] = attribute.nodeValue;
        } else {
          attributeObj[attribute.name] = attribute.nodeValue;
        }
      });
    }
    // use this for custom imported React Components that need to be rendered, ie. "infocard" : InfoCard
    var customReactNode = {
      "CollapseStyled": CollapseStyled,
      "PanelStyled": PanelStyled,
      "StyleRichText": StyleRichText,
    };
    console.log(attributeObj);
    let cNodes = childNodes;
    if ("react-component" in attributeObj) {
       // console.log(attributeObj["react-component"]);


      if ("assign-inner-content-to-prop" in attributeObj) {
      if (attributeObj["assign-inner-content-to-prop"] === "htmlOrMarkdown") {
        attributeObj["htmlOrMarkdown"] = node.innerHTML;
        cNodes = null;
      }
    }
    //attributeObj["defaultActiveKey"] = ['1'];
    console.log(customReactNode[attributeObj["react-component"]]);
    cNodes = cNodes && Array.isArray(Array.from(cNodes)) ?
    createJSX(Array.from(cNodes)) :
    [];
      return  React.createElement(
        customReactNode[attributeObj["react-component"]],
          attributeObj,
          cNodes

        )

    }
    switch (localName) {
      case "a":
        if (attributeObj["href"].substring(0, 1) == "/")
          // internal  links need to be handled differently in order for SPA experience to work, otherwise reloads the page
          return (
            <HrefLinkInternal to={attributeObj["href"]}>
              {childNodes[0].data}
            </HrefLinkInternal>

          )
        else
          return (
            <HrefLink href={attributeObj["href"]}>
              {childNodes[0].data}
            </HrefLink>
          )
    }
    return localName ?
      React.createElement(
        customReactNode[localName] ?? localName,
        attributeObj,
        childNodes && Array.isArray(Array.from(childNodes)) ?
          createJSX(Array.from(childNodes)) :
          []
      ) :
      nodeValue;
  });
};

export const StringToJSX = props => {
  return createJSX(Array.from(getNodes(props.domString)));
};