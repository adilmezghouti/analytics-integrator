// 1-Initial load of the page: collect all the necessary properties after the page finishes loading.
//   We need to collect the properties loaded by the async calls as well.
// 2-Collect properties after firing an event
// 3-Submit data before unload the current page

const Integrator = class Integrator {
    constructor(page, config) {
        this.properties = config[page];
    }

    retrieveValueForKey(key, jsonObject) {
        const entries = Object.entries(jsonObject);

        if (entries.length === 0) return false;
        const objs = {};
        for (const entry of entries) {
            const [k, v] = entry;
            if (typeof v === 'object') {
                for (const e of Object.entries(v)) {
                    objs[e[0]] = e[1];
                }
            }
            if (k === key && v) return v;
        }
        return this.retrieveValueForKey(key, objs);
    }

    updateProperties(inProps) {
        return this.retrieveValues(this.properties, inProps);
    }
};

export default Integrator;
