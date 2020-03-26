export const berryMixin = {
    data() {
        return {
            filterText: '',
            edibleBerries: [
                        'Raspberry', 'Strawberry', 'Blackberry', 'Blueberry', 
                        'Goji berry', 'Bilberry', 'Acai berry', 'Cranberry', 
                        'Elderberry', 'Cloudberry', 'Huckleberry', 'Gooseberry',
                        'Chokeberry', 'Mulberry', 'Salmonberry', 'Saskatoon berry',
                        'Buffaloberry', 'Muscadine berry'
                    ],
        }
    },
    computed: {
        filteredBerries() {
            return this.edibleBerries.filter((berry) => {
                return berry.toLowerCase().match(this.filterText);
            })
        },
        reversed() {
            return this.berryFamilyName.split("").reverse().join("") + " (" + this.berryFamilyName.length + ")";
        }
    },
}