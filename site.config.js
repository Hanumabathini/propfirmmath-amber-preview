/* PropFirmMath public site config.
   This is the only place the public operator name, contact email, and
   canonical domain are set. Edit the values below before launch.
   TODO: set CONTACT_EMAIL to the business inbox.
   TODO: set SITE_URL to the final public domain (https, no trailing slash).
   TODO: set AFFILIATE_LINKS_ACTIVE to true only after real affiliate URLs
         are added to the AFF object in index.html. Do not add tracking
         parameters. Leave it false while every outbound link is a normal
         link to the firm's own site. */
var SITE_CONFIG = {
  OPERATOR: "PropFirmMath",
  CONTACT_EMAIL: "contact@propfirmmath.com",
  SITE_URL: "https://propfirmmath.com",
  AFFILIATE_LINKS_ACTIVE: false
};
if (typeof module !== "undefined" && module.exports) module.exports = SITE_CONFIG;
