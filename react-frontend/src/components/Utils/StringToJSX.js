import React from "react";
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';

let getNodes = function(str) {
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
    if (localName === "h1"){
        document.title = node.innerText +" - Digital Government - Province of British Columbia";
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
     };
    switch (localName) {
        case "a" :
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