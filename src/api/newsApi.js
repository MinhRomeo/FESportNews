import axiosClient from 'lib/axios';

const api = {
    async getAll(params) {
        // Transform _page to _start
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
        // Remove un-needed key
        delete newParams._page;
        // Fetch news list + count
        // const newsList = await axiosClient.get('/newss', { params: newParams });
        const newsList = [
            {
                id: 1,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 1,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews1.jpg',
            },
            {
                id: 2,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 2,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            },
            {
                id: 3,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 3,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews3.jpg',
            },
            {
                id: 4,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 4,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews4.jpg',
            },
            {
                id: 5,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 5,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews1.jpg',
            },
            {
                id: 6,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            },
        ];
        // const count = await axiosClient.get('/newss/count', { params: newParams });
        // Build response and return
        return {
            data: newsList,
            pagination: {
                page: params._page,
                limit: params._limit,
                total: newsList.length,
            },
        };
    },
};

export default api;
