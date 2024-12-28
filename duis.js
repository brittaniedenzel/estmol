export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    on: [
        // This array might be populated with event handlers
        // { event: 'click', method: 'increment' }
    ]
};
