import { productResponse } from 'assets/fakeData';
import axiosClient from 'lib/axios';
const prefixUrl = 'auth';
const api = {
    async getAll(params) {
        // Transform pageIndex to _start
        const newParams = { ...params };
        newParams._start = !params.pageIndex || params.pageIndex <= 1 ? 0 : (params.pageIndex - 1) * (params.pageSize || 50);
        // Remove un-needed key
        delete newParams.pageIndex;
        // Fetch news list + count
        // const newsList = await axiosClient.get('/newss', { params: newParams });
        // Fake Data
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
                author: 'kha banh vc',
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
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
            ,
            {
                id: 7,
                author: 'kha banh',
                title: 'Welcome To The Best Model Winner Contest',
                content: 'This is content of this news',
                createAt: 132432412342,
                categoryId: 6,
                isDelete: false,
                userId: 21234,
                image: 'assets/img/news/whatNews2.jpg',
            }
        ];


        // const count = await axiosClient.get('/newss/count', { params: newParams });
        // const producResponse = productResponse;
        // const productData = producResponse.data;
        // const contents = productData?.content;
        // Build response and return
        return {
            data: newsList,
            pagination: {
                page: params.pageIndex,
                limit: params.pageSize,
                total: newsList.length,
            },
        };
    },
};

// code cua hiep
export const api2={
    getAllProducts: (pageIndex) => {
        return axiosClient.post(`/product/getAllProduct?pageIndex=${pageIndex}`);
    }

}
export const api3={
    getProductDetails: (id) => {
        return axiosClient.get(`/product/product-detail/${id}`);
    }

}


export default api;
