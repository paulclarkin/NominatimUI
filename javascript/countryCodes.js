$(document).ready(function() {
  $.each(countryCodes,function(key,value){
    $("#country-codes").append('<option value = "'+ value +'">'+key+'</option>')
  })
});

var countryCodes = {
	"Great Britain":"GB",
	"World":"",
	"Afghanistan":"AF",
	"Albania":"AL",
	"Algeria":"DZ",
	"American Samoa":"AS",
	"Andorra":"AD",
	"Angola":"AO",
	"Anguilla":"AI",
	"Antigua":"AG",
	"Argentina":"AR",
	"Armenia":"AM",
	"Aruba":"AW",
	"Australia":"AU",
	"Austria":"AT",
	"Azerbaijan":"AZ",
	"Bahamas":"BS",
	"Bahrain":"BH",
	"Bangladesh":"BD",
	"Barbados":"BB",
	"Barbuda":"AG",
	"Belarus":"BY",
	"Belgium":"BE",
	"Belize":"BZ",
	"Benin":"BJ",
	"Bermuda":"BM",
	"Bhutan":"BT",
	"Bolivia":"BO",
	"Bonaire":"AN",
	"Bosnia-Herzegovina":"BA",
	"Botswana":"BW",
	"Brazil":"BR",
	"British Virgin Islands":"VG",
	"Brunei":"BN",
	"Bulgaria":"BG",
	"Burkina Faso":"BF",
	"Burundi":"BI",
	"Cambodia":"KH",
	"Cameroon":"CM",
	"Canada":"CA",
	"Cape Verde":"CV",
	"Cayman Islands":"KY",
	"Chad":"TD",
	"Chile":"CL",
	"China,":"CN",
	"Colombia":"CO",
	"Congo":"CG",
	"Congo, Dem. Rep. of":"CD",
	"Cook Islands":"CK",
	"Costa Rica":"CR",
	"Croatia":"HR",
	"Curacao":"AN",
	"Cyprus":"CY",
	"Czech Republic":"CZ",
	"Denmark":"DK",
	"Djibouti":"DJ",
	"Dominica":"DM",
	"Dominican Republic":"DO",
	"East Timor":"TL",
	"Ecuador":"EC",
	"Egypt":"EG",
	"El Salvador":"SV",
	"Eritrea":"ER",
	"Estonia":"EE",
	"Ethiopia":"ET",
	"Faeroe Islands":"FO",
	"Fiji":"FJ",
	"Finland":"FI",
	"France":"FR",
	"French Guiana":"GF",
	"French Polynesia":"PF",
	"Gabon":"GA",
	"Gambia":"GM",
	"Georgia, Republic of":"GE",
	"Germany":"DE",
	"Ghana":"GH",
	"Gibraltar":"GI",
	"Greece":"GR",
	"Greenland":"GL",
	"Grenada":"GD",
	"Guadeloupe":"GP",
	"Guam":"GU",
	"Guatemala":"GT",
	"Guinea":"GN",
	"Guyana":"GY",
	"Haiti":"HT",
	"Honduras":"HN",
	"Hong Kong":"HK",
	"Hungary":"HU",
	"Iceland":"IS",
	"India":"IN",
	"Indonesia":"ID",
	"Iraq":"IQ",
	"Ireland, Republic of":"IE",
	"Israel":"IL",
	"Italy":"IT",
	"Ivory Coast":"CI",
	"Jamaica":"JM",
	"Japan":"JP",
	"Jordan":"JO",
	"Kazakhstan":"KZ",
	"Kenya":"KE",
	"Korea, South":"KR",
	"Kuwait":"KW",
	"Kyrgyzstan":"KG",
	"Laos":"LA",
	"Latvia":"LV",
	"Lebanon":"LB",
	"Lesotho":"LS",
	"Liberia":"LR",
	"Libya":"LY",
	"Liechtenstein":"LI",
	"Lithuania":"LT",
	"Luxembourg":"LU",
	"Macau":"MO",
	"Macedonia":"MK",
	"Madagascar":"MG",
	"Malawi":"MW",
	"Malaysia":"MY",
	"Maldives, Republic of":"MV",
	"Mali":"ML",
	"Malta":"MT",
	"Marshall Islands":"MH",
	"Martinique":"MQ",
	"Mauritania":"MR",
	"Mauritius":"MU",
	"Mexico":"MX",
	"Micronesia":"FM",
	"Moldova":"MD",
	"Monaco":"MC",
	"Mongolia":"MN",
	"Montserrat":"MS",
	"Morocco":"MA",
	"Mozambique":"MZ",
	"Namibia":"NA",
	"Nepal":"NP",
	"Netherlands Antilles":"AN",
	"Netherlands":"NL",
	"New Caledonia":"NC",
	"New Zealand":"NZ",
	"Nicaragua":"NI",
	"Niger":"NE",
	"Nigeria":"NG",
	"Norway":"NO",
	"Oman":"OM",
	"Pakistan":"PK",
	"Palau":"PW",
	"Palestine":"PS",
	"Panama":"PA",
	"Papua New Guinea":"PG",
	"Paraguay":"PY",
	"Peru":"PE",
	"Philippines":"PH",
	"Poland":"PL",
	"Portugal":"PT",
	"Puerto Rico":"US",
	"Qatar":"QA",
	"Reunion":"RE",
	"Romania":"RO",
	"Russia":"RU",
	"Rwanda":"RW",
	"Saba":"AN",
	"Saipan":"MP",
	"Samoa":"WS",
	"San Marino":"IT",
	"Saudi Arabia":"SA",
	"Senegal":"SN",
	"Serbia and Montenegro":"CS",
	"Seychelles":"SC",
	"Singapore":"SG",
	"Slovak Republic":"SK",
	"Slovenia":"SI",
	"South African Republic":"ZA",
	"Spain":"ES",
	"Sri Lanka":"LK",
	"St. Barthelemy":"GP",
	"St. Eustatius":"AN",
	"St. Kitts and Nevis":"KN",
	"St. Lucia":"LC",
	"St. Martin":"AN",
	"St. Vincent":"VC",
	"Suriname":"SR",
	"Swaziland":"SZ",
	"Sweden":"SE",
	"Switzerland":"CH",
	"Syria":"SY",
	"Taiwan":"TW",
	"Tanzania":"TZ",
	"Thailand":"TH",
	"Togo":"TG",
	"Tonga":"TO",
	"Trinidad and Tobago":"TT",
	"Tunisia":"TN",
	"Turkey":"TR",
	"Turks and Caicos Islands":"TC",
	"U.S. Virgin Islands":"VI",
	"U.S.A.":"US",
	"Uganda":"UG",
	"Ukraine":"UA",
	"United Arab Emirates":"AE",
	"Uruguay":"UY",
	"Uzbekistan":"UZ",
	"Vanuatu":"VU",
	"Vatican":"IT",
	"Venezuela":"VE",
	"Vietnam":"VN",
	"Wallis & Futuna Islands":"WF",
	"Yemen, The Republic of":"YE",
	"Zambia":"ZM",
	"Zimbabwe":"ZW"
};