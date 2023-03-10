import { Collapse } from "antd";
import React from "react";
import { CollapseStyled, PanelStyled } from "../StyleComponents/collapseMenu";
import { HrefLink, HrefLinkInternal } from '../StyleComponents/htmlTags';
import { StyleRichText } from "../StyleComponents/styledMarkdown";
import ScrollspyNav from "../WordPress/ScrollspyNav";
import { HrefLinkScrollTo } from '../StyleComponents/htmlTags';

let getNodes = function (str) {
  return new DOMParser().parseFromString(str, "text/html").body.childNodes;
}

let createJSX = nodeArray => {
  
  return nodeArray.map((node) => {
    let debug = false;

    let attributeObj = {};
    const {
      attributes,
      localName,
      childNodes,
      nodeValue
    } = node;

    if (debug)
      console.log('=== node: ', node);

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
      "ScrollspyNav":ScrollspyNav,
      "HrefLinkScrollTo":HrefLinkScrollTo
    };

    if (debug)
      console.log('attrs: ', attributeObj);

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
        // console.log(customReactNode[attributeObj["react-component"]]);
    
        if(attributeObj["react-component"]=="HrefLinkScrollTo"){
          attributeObj['offset']=parseInt(attributeObj['offset']);
          attributeObj['smooth']= (attributeObj['smooth']=='true');
          attributeObj['spy']= (attributeObj['spy']=='true');
        }

        cNodes = cNodes && Array.isArray(Array.from(cNodes)) ?
            createJSX(Array.from(cNodes)) : [];
        
        if (debug){
          console.log('CREATING react component: ');
          console.log(attributeObj["react-component"]);
        }

        return React.createElement(
            customReactNode[attributeObj["react-component"]],
            attributeObj,
            cNodes
    
        )
    
    }
    switch (localName ) {
      case ("a"):
        if (debug)
          console.log('CREATING regular  link..');

        if (attributeObj["href"].substring(0, 1) == "/"){
          // internal  links need to be handled differently in order for SPA experience to work, otherwise reloads the page
          return (
            <HrefLinkInternal to={attributeObj["href"]}>
              {childNodes[0].data}
            </HrefLinkInternal>

          )
        }else{
          return React.createElement(
            HrefLink,
            attributeObj,
            childNodes && Array.isArray(Array.from(childNodes)) ?
              createJSX(Array.from(childNodes)) :
              []
          )
          // return (
          //   <HrefLink href={attributeObj["href"]}>
          //     {childNodes[0].data}
          //   </HrefLink>
          // )
        }
    }

    if (localName=="hr" || localName=="br")
      return React.createElement(
        localName,
        attributeObj
      ) ;

    

    if (debug)
      console.log('CREATING: ', localName);
      
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