export default function(typeDefault = null) {
    return {
        data() {
            return {
                data: typeDefault, //先定义好数据  
                isLoading: true,
            }
        },
        async created() { //在数据响应式后执行执行该promise
            this.data = await this.feachData();
            this.sortData();
            this.isLoading = false;
        },
        methods: {
            sortData() {
                if (this.data.rows) {
                    this.data.rows.sort((a, b) => {
                        return b.createDate - a.createDate
                    })
                }
            },
        }
    }
}