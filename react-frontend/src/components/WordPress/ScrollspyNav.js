import React, { Component } from 'react';

const isBrowser = typeof window !== "undefined";
const SCROLLSPY_NAV_NAMESPACE = "react-scrollspy-nav";
/**
 * ScrollspyNav component. Refer to below for the props it receives
 */
export default class ScrollspyNav extends Component {
	

	constructor(props) {
	  super(props);
      console.log('scrollspy nav constructor, ',props)

	  
  
	  this.props = props;
	  this.scrollTargetIds = JSON.parse(this.props.scrolltargetids);
	  this.activeNavClass = this.props.activenavclass;
	  this.scrollDuration = Number(this.props.scrollduration) || 1000;
	  this.headerBackground = this.props.headerBackground === "true" ? true : false;
	  this.offset = this.props.offset || 0;
	  this.scrollElementSelector = this.props.scrollelementselector;
  
	  

	  //   console.log("CONSTRUCTOR, this: ", this);
	  this.onScroll = this.onScroll.bind(this);
  
	  if(this.props.router && this.props.router === "HashRouter") {
		this.homeDefaultLink = "#/";
		this.hashIdentifier = "#/#";
	  } else {
		this.homeDefaultLink = "/";
		this.hashIdentifier = "#";
	  }
	}
  
	/**
	 * Scroll event handler. It checks the current window offset and compares it with the pageYOffset of each
	 *  target sections. It highlights the nav link when scrolling to a corresponding section
	 */
	onScroll() {
		// console.log('===scroll!')
	  let scrollSectionOffsetTop;
	  let scrollSectionOffsetTop_link;
	  let offset = null;
	  let height = null;
	  let scrollHeight = null;

	  if (isBrowser){
		if(this.scrollElementSelector){
			offset=document.querySelectorAll(this.scrollElementSelector)[0].scrollTop;
			height = document.querySelectorAll(this.scrollElementSelector)[0].clientHeight;
			scrollHeight = document.querySelectorAll(this.scrollElementSelector)[0].scrollHeight;
		}else{
			height = window.innerHeight;
			offset= window.pageYOffset;
			scrollHeight=document.body.scrollHeight
		}
	  }

      let candidates =[];
	  this.scrollTargetIds.forEach((sectionID, index) => {
		// console.log('====scroll target: ', sectionID, index);
		if (!document.getElementById(sectionID)) {
		  console.warn(`${SCROLLSPY_NAV_NAMESPACE}: no element with id ${sectionID} present in the DOM`);
		  return;
		}

		

		let targetRect;
		let linkRect;
        targetRect = document.getElementById(sectionID).getBoundingClientRect();
        let link =document.getElementById(sectionID+"_link");
        linkRect = link.getBoundingClientRect();

        if (this.scrollElementSelector){
            // Get the top, left coordinates of two elements
            const scrollingElementRect = document.querySelectorAll(this.scrollElementSelector)[0].getBoundingClientRect();
            

            // Calculate the top and left positions
            // this calculates position relative to scrollable container (typically window)
            // console.log('targetRect.top: ', targetRect.top);
			// console.log('linkRect.top: ', linkRect.top);
            // console.log(' scrollingElementRect.top: ', scrollingElementRect.top);

            scrollSectionOffsetTop = targetRect.top - scrollingElementRect.top;
            scrollSectionOffsetTop_link = linkRect.top - scrollingElementRect.top;
			// console.log('scrollSectionOffsetTop_link: ', scrollSectionOffsetTop_link);
        }else{
            scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop - (this.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
        }
		
	
		// console.log('vars: ')
        // console.log('scrollHeight: ', scrollHeight);
        // console.log('height: ', height);
		// console.log('offset: ', offset)
		// console.log('this.offset: ', this.offset)
		// console.log('scrollSectionOffsetTop: ', scrollSectionOffsetTop)
		// console.log(' document.getElementById(sectionID).scrollHeight: ',  document.getElementById(sectionID).scrollHeight)
		// console.log('offset - this.offset',offset - this.offset);
		// console.log(' scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight', scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight);
		// console.log('isBrowser && offset - this.offset >= scrollSectionOffsetTop: ', isBrowser && offset - this.offset >= scrollSectionOffsetTop)
		// console.log(' offset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight: ',  offset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight)

        // highlight the last element visible in the viewport
        // if scrollSectionOffsetTop < 0, then we scrolled past it (element is outside of view, above)
        // it will be active if it's the last to meet this condition + there is no element currently in viewport
		// ORIGINAL BEHAVIOR
        // if (scrollSectionOffsetTop<0){
        //     candidates.push(sectionID);
        // }else if(scrollSectionOffsetTop>0 && scrollSectionOffsetTop<height){
        //     candidates.push(sectionID);
        // }
		if (targetRect.top<=linkRect.top || index==0){ // if it's first, it should always be a candidate
			candidates.push(sectionID);
		}

		// if (isBrowser && offset - this.offset >= scrollSectionOffsetTop) { // && offset < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight
		// 	console.log('ADD CLASS');
		//   this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
		//   this.clearOtherNavLinkActiveStyle(sectionID)
		// } else {
		// 	console.log('REMOVE CLASS');
		//   this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
		// }
	
		// if (isBrowser && height + offset >= scrollHeight && index === this.scrollTargetIds.length - 1) {
		// 	console.log('ADD CLASS 2');
		//   this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
		//   this.clearOtherNavLinkActiveStyle(sectionID);
		// }
	  });
      
    //   console.log('candidates: ', candidates);
      this.scrollTargetIds.forEach((sectionID, index) => {
        if (candidates.at(-1)==sectionID){
            this.getNavLinkElement(sectionID).classList.add(this.activeNavClass);
        }else{
            this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
        }
      })
	}

    isInViewport(element,parent) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
	easeInOutQuad(current_time, start, change, duration) {
		current_time /= duration/2;
		if (current_time < 1) return change/2*current_time*current_time + start;
		current_time--;
		return -change/2 * (current_time*(current_time-2) - 1) + start;
	};
  
	/**
	 * Perform scroll animation with given start place, end place and duration
	 * @param {Number} start
	 * @param {Number} to
	 * @param {Number} duration
	 */
	scrollTo(start, to, duration) {
	  let change = to - start,
		  currentTime = 0,
		  increment = 10;
  
	  let animateScroll = () => {
		  currentTime += increment;
		  let val = this.easeInOutQuad(currentTime, start, change, duration);
		  isBrowser && window.scrollTo(0, val);
		  if(currentTime < duration) {
			  setTimeout(animateScroll, increment);
		  }
	  };
  
	  animateScroll();
	}
  
	/**
	 * Get the nav link element with a given sectionID that the nav link links to
	 * @param {String} sectionID
	 */
	getNavLinkElement(sectionID) {
	  return document.querySelector(`a[href='${this.hashIdentifier}${sectionID}']`);
	}
  
	/**
	 * Given a nav href url, get its clean sectionID based on if there is hash router identifier or not
	 * @param {String} navHref
	 */
	getNavToSectionID(navHref) {
	  return navHref.includes(this.hashIdentifier) ? navHref.replace(this.hashIdentifier, "") : "";
	}
  
	/**
	 * Clear the highlight style on the non-current viewed nav elements
	 * @param {String} excludeSectionID 
	 */
	clearOtherNavLinkActiveStyle(excludeSectionID) {
	  this.scrollTargetIds.map((sectionID, index) => {
		if (sectionID !== excludeSectionID) {
		  this.getNavLinkElement(sectionID).classList.remove(this.activeNavClass);
		}
	  });
	}
  
	componentDidMount() {
	  if (document.querySelector(`a[href='${this.homeDefaultLink}#']`)) {
		document.querySelector(`a[href='${this.homeDefaultLink}#']`).addEventListener("click", (event) => {
		  event.preventDefault();
		  isBrowser && this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
		  if (isBrowser) {
			window.location.hash = "";
		  }
		});
	  }
  
	  document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach( (navLink) => {
		navLink.addEventListener("click", (event) => {
		  event.preventDefault();
		  let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));
  
		  if(sectionID) {
			if (document.getElementById(sectionID)) {
			  let scrollTargetPosition = document.getElementById(sectionID).offsetTop - (this.headerBackground ? document.querySelector("div[data-nav='list']").scrollHeight : 0);
			  isBrowser && this.scrollTo(window.pageYOffset, scrollTargetPosition + this.offset, this.scrollDuration);
			} else {
			  console.warn(`${SCROLLSPY_NAV_NAMESPACE}: no element with id ${sectionID} present in the DOM`);
			}
		  } else {
			isBrowser && this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
		  }
		});
	  })
  
	  let element = null;
	  if (isBrowser){
		if(this.scrollElementSelector){
			element=window;
		}else{
			element= window;
		}
	  }
	  
	  isBrowser && element.addEventListener("scroll", this.onScroll);
	}
  
	componentWillUnmount() {
	  isBrowser && window.removeEventListener("scroll", this.onScroll);
	}

	componentDidUpdate(){
		// highlight first item on load
		try{
			this.getNavLinkElement(this.scrollTargetIds[0]).classList.add(this.activeNavClass);
		}catch(e){}
	}
  
	render() {
	  return(
		<div data-nav="list">
		  { this.props.children }
		</div>
	  );
	}
  }