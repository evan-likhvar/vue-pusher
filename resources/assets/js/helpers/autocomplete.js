import algolia from 'algoliasearch'
import autocomplete from 'autocomplete.js'

var index = algolia('5DLCPN8I4O', 'ee8b5cfe65edd4ec36503ccd4a31cbad')

export const userautocomplete = selector => {
    let users = index.initIndex('users');

    return autocomplete(selector, {}, {
        source: autocomplete.sources.hits(users, { hitsPerPage: 10 }),
        displayKey: 'name',
        templates: {
            suggestion (suggestion) {
                return '<span>' + suggestion.name + '</span>'
            },
            empty: '<div class="aa-empty">No people found.</div>'
        }
    })
}