# Get all resource URLs.

Making a request to the API's base URL returns an object containing available endpoints.

| Responses |
| --- |
| 200OKSchema  —  OPTIONAL bject | Schema  —  OPTIONAL | object |
| Schema  —  OPTIONAL |
| object |

JavaScript
```
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};


fetch("https://www.dnd5eapi.co/api/2014", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

```

# Get list of all available resources for an endpoint.

Currently only the /spells and /monsters endpoints support filtering with query parameters. Use of these query parameters is documented under the respective Spells and Monsters sections.

| Path Parameters |
| --- |
| endpoint string —  REQUIRED .|
Possible values: [ability-scores, alignments, backgrounds, classes, conditions, damage-types, equipment, equipment-categories, feats, features, languages, magic-items, magic-schools, monsters, proficiencies, races, rule-sections, rules, skills, spells, subclasses, subraces, traits, weapon-properties] |

| Responses |
| --- |
| 200OKSchema  —  OPTIONALcount number —  OPTIONALTotal number of resources available.results object[] —  OPTIONALindex string —  OPTIONALResource index for shorthand searching.name string —  OPTIONALName of the referenced resource.url string —  OPTIONALURL of the referenced resource.updated_at string —  OPTIONALDate and time the resource was last updated. | Schema  —  OPTIONAL | count number —  OPTIONALTotal number of resources available. | results object[] —  OPTIONALindex string —  OPTIONALResource index for shorthand searching.name string —  OPTIONALName of the referenced resource.url string —  OPTIONALURL of the referenced resource.updated_at string —  OPTIONALDate and time the resource was last updated. | index string —  OPTIONALResource index for shorthand searching. | name string —  OPTIONALName of the referenced resource. | url string —  OPTIONALURL of the referenced resource. | updated_at string —  OPTIONALDate and time the resource was last updated. |
| Schema  —  OPTIONAL |
| count number —  OPTIONALTotal number of resources available. |
| results object[] —  OPTIONALindex string —  OPTIONALResource index for shorthand searching.name string —  OPTIONALName of the referenced resource.url string —  OPTIONALURL of the referenced resource.updated_at string —  OPTIONALDate and time the resource was last updated. | index string —  OPTIONALResource index for shorthand searching. | name string —  OPTIONALName of the referenced resource. | url string —  OPTIONALURL of the referenced resource. | updated_at string —  OPTIONALDate and time the resource was last updated. |
| index string —  OPTIONALResource index for shorthand searching. |
| name string —  OPTIONALName of the referenced resource. |
| url string —  OPTIONALURL of the referenced resource. |
| updated_at string —  OPTIONALDate and time the resource was last updated. |


JavaScript
```
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};


fetch("https://www.dnd5eapi.co/api/2014/:endpoint", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```