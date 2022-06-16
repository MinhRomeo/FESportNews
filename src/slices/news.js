import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isError: false,
    news: {
        list: [
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
        ],
    },
};

const slice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

export const { actions, reducer } = slice;
