# Guide To CoCo fields for Digital.gov.bc.ca strapi app.

## Fields that are not displayed on website

### uid `required`

This is used by the frontend to navigate to the CoCo when clicking on the card.  The uid should be automatically generated based on the CoCo Name entered.

### Team Name `required`

Name of the team that created the CoCo.

## Fields displayed on the CoCo card (All fields bellow this point are displayed on the CoCo Page.

### Name `required`

The name of the CoCo.

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
-- red: Abandoned  

### Team and Ministry `required`

A line of text that describes the team and ministry.

### CoCoTag `optional`

This is a multiselect field that adds common tags to the CoCo. For example: API, Code, Instruction, Service, Form.  To add items to this multi-select, got to the CoCoTag content type and add it.  The new tag will appear in the CoCo dropdown.

### Cost Structure `required`

This component has two fields. Only the Cost field is displayed on the CoCo card.
 - Cost: A single select drop down for the cost structure of the CoCo.
 - Payment Structure: This is an optional rich text field that will give more details on the Payment Structure. Note: In order to insure the Digital.gov site remains accessible to screen readers, pleas do not use h-tags in the text box.  (h1,h2, etc).

### Number of Teams `required`

An estimate of the number of teams that currently use this CoCo, ideally a given CoCo team will know how many people have implemented it, however if that information is not available an estimate is acceptable.

### Onboarding Time `required`

Select the best estimate for the time needed to implement a given CoCo: hours, days, weeks, months.

### Support Schedule `required`

What schedule is the support team available.

## Fields displayed on the CoCo page, but NOT displayed on CoCo Card.

### CoCo image `required`

A logo or image that represents the CoCo. Note: There are currently no restrictions on the size or aspect ratio of the image uploaded.  However, for best results please upload an image with a 4:3 ratio. Otherwise it may get distorted when displayed.

### CoCoWebsite `required`

This is the CoCo's website it will be linked through the project image.

### WhoIsUsingThis `1 required up to 3 possible`

This is a tag associated with the ministries using the CoCo.

### Component Creation Date `required`

A best estimate of when the component was created.  Currently strapi only has a date picker, if the content manager is unsure of the exact realease date the closest month is fine.

### WhyShouldIUseThis `3 required`

Three of these components are needed on each CoCo to advertise its best features. It has three fields:

- Icon: An icon representing the motivation (e.g. a clock for time saving) Please only use 24x24px png images.
- Heading: Eye catching headline of a few words
- Details: Slightly longer text giving more details

### ServiceLevelSupport `1 required more possible`

Details about support provided for the component.  

### Additional Technical Information `1 required more possible`

Directs interested parties to other technical docs.  Two fields:

- Header: Text describing the technical info
- Link: A url link to the documentation

### Requirements and Restrictions `1 required more possible`

Directs interested parties to other any additional documentation about requirements and restrictions.  Two fields

- Header: Text describing the documentation.
- Link: A url link to the documentation. 

### Get Started URL `required`

A url that links to the components 'get started' documentation.

### Get started steps `optional`

Optional richtext that allows content manager to list steps to getting started using markdown. 

### Service Level Support `required`

A rich text field that describes the support that exist for the app. Please don't use any h-tags in the text to insure the screen readers do not get confused. (h1, h2, etc).

### Support Contact `1 required more possible`

A required component for contacting the component's support.  It has two fields:
- Header: a description of the contact (e.g. Support managed through GitHub issues)
- PhoneURLorEmail: a phone number, website, or email contact.