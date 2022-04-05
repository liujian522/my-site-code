export default function(refsDom) {
    return {
        mounted() {
            this.$refs[refsDom].addEventListener('scroll', this.handleScrollMiXins);
            this.$Bus.$on('setScroll', this.setScrollMiXins);
        },
        destroyed() {
            this.$Bus.$emit('scroll');
            this.$Bus.$emit('del')
            this.$Bus.$off('setScroll', this.setScrollMiXins);
        },
        methods: {
            setScrollMiXins(n) {
                this.$refs[refsDom].scrollTop = n;
            },
            handleScrollMiXins() {
                this.$Bus.$emit('scroll', this.$refs[refsDom])
            },
        }
    }
};