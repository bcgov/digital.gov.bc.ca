# Guide To CoCo fields for Digital.gov.bc.ca strapi app.

## Fields that are not displayed on website

### uid `required`

This is used by the frontend to navigate to the coco when clicking on the card.  The uid should be automatically generated based on the CoCo Name entered

### Team Name `required`

Name of the team that created the CoCo

## Fields displayed on the CoCo card (All fields bellow this point are displayed on the CoCo Page.

### Name `required`

The name of the common component.

### Description `required`

A brief description of what the CoCo does in plain text.

### DevelopmentStatus `required`

A component with two fields Status and Colour.  Their values are hardcoded to be:
- Status
-- Mature:
-- Alpha:
-- Beta:
- Colour
-- green: Actively Developed 	
-- yellow: Maintained
-- red: Abandonned  

### Team and Ministry `required`

A line of text that describes the team and ministry.

### CoCoTag `optional`

This is a multiselect field that adds common tags to the CoCo. For example: API, Code, Instruction, Service.  To add items to this multi-select, got to the CoCoTag content type and add it.  The new tag will appear in the CoCo dropdown.

### Cost `at least 1 required`

This is a multiselect field that adds common cost structures to the CoCo. For example: Free, SAS, Paid Version.  To add items to this multi-select, got to the CoCoTag content type and add it.  The new tag will appear in the CoCo dropdown.

### Number of Teams `required`

An estimate of the number of teams that currently use this CoCo, ideally a given CoCo team will know how many people have implemented it, however if that information is not available an estimate is acceptable.

### Onboarding Time `required`

Select the best estimate for the time needed to implement a given coco.  (hours days, weeks, months)

### Support Schedule `required`

What schedule is the support team available.

## Fields NOT displayed on CoCo Card

### CoCo image `required`

A logo or image that represents the CoCo

### CoCoWebsite `required`

This is the CoCo's website it will be linked through the project image.

### WhoIsUsingThis `1 required up to 3 possible`

This is a tag associated with the ministries using the CoCo

### Component Creation Date `required`

A best estimate of when the component was created.  Currently strapi only has a date picker, if the content managed is unsure of the exact realease date the closest month is fine.

### WhyShouldIUseThis `3 required`



### Number of Functions Performed NOT SURE HOW TO DO THIS

### ServiceLevelSupport `1 required more possible`

### Additional Technical Information `1 required more possible`

### Requirements and Restrictions `1 required more possible`

### Get Started URL `required`

### Get started steps `optional`

### Support Contact `1 required more possible`