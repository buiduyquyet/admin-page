import { EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Table, Tooltip } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const PostsManagement = () => {
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            sorter: (a, b) => a.userId - b.userId,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.localeCompare(b.title)
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, item) => (
                <Tooltip title='Detail'>
                    <Button onClick={() => {
                        setIsModalOpen(true);
                        axios.get(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
                            .then((res) => {
                                setDetail(res.data);
                                console.log(res.data)
                            })
                            .catch((err) => console.log(err));

                    }}>
                        <EyeOutlined />
                    </Button>
                </Tooltip>
            )
        }
    ];

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(res.data);
            } catch (error) {
                console.log(error)
            }
        };
        getData();
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <Modal title="Detail" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>ID: {detail?.id}</p>
                <p>User ID: {detail?.userId}</p>
                <p>Title: {detail?.title}</p>
                <p>Body: {detail?.body}</p>
            </Modal>
        </div>
    )
}

export default PostsManagement
